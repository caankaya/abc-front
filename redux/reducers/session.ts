import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import instance from "../../commons/axios";
import { ISequence } from "../../src/@types/sequence";

interface SessionState {
  levelButton: boolean;
  session: ISequence | null;
}

const initialState: SessionState = {
  levelButton: false,
  session: null,
};

export const toggleLevelButton = createAction<boolean>(
  "session/Level button toggled"
);

export const getSession = createAsyncThunk(
  "Session reducer / Get one session ", // nom de l'action
  async (sessionId: number) => {
    const response = await instance.get(
      `/user/${localStorage.getItem("id")}/session/${sessionId}`
    );
    return response.data;
  }
);

export const clearCardModal = createAction("Session/Cleaning card modal");

const sessionReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleLevelButton, (state, action) => {
    state.levelButton = action.payload;
  });
});

export default sessionReducer;
