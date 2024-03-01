import { jwtDecode } from "jwt-decode";
import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import instance from "../../commons/axios";

interface UserState {
  logged: boolean | null;
  id: string | null;
  username: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  connectionAlert: boolean;
}

const initialState: UserState = {
  logged: Boolean(sessionStorage.getItem("accessToken")),
  id: sessionStorage.getItem("id") || null,
  username: sessionStorage.getItem("username") || null,
  accessToken: sessionStorage.getItem("accessToken") || null,
  refreshToken: sessionStorage.getItem("refreshToken") || null,
  connectionAlert: false,
};

interface JwtPayload {
  data: {
    id: string;
    username: string;
  };
}

export const login = createAsyncThunk(
  "user/login",
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);
    const { data } = await instance.post("/log/in", objData);
    return data;
  }
);

export const logout = createAction("user/logut");

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      state.logged = true;
      const { accessToken, refreshToken } = action.payload.data;
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);
      const decodedToken: JwtPayload = jwtDecode(accessToken);
      sessionStorage.setItem("id", decodedToken.data.id);
      sessionStorage.setItem("username", decodedToken.data.username);
    })
    .addCase(login.rejected, (state) => {
      state.connectionAlert = true;
    })
    .addCase(logout, (state) => {
      state.logged = false;
      sessionStorage.clear();
    });
});

export default userReducer;
