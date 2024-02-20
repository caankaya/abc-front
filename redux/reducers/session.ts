import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import instance from "../../commons/axios";
import { ICards } from "../../src/@types/cards";

interface SessionState {
  levelButton: boolean;
  cards: ICards[] | null;
}

const initialState: SessionState = {
  levelButton: false,
  cards: null,
};

export const toggleLevelButton = createAction<boolean>(
  "session/Level button toggled"
);

export const getCards = createAsyncThunk("cards/fetch all cards", async () => {
  const response = await instance.get("/storyBoard/cards");
  return response.data;
});

const sessionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleLevelButton, (state, action) => {
      state.levelButton = action.payload;
    })
    .addCase(getCards.fulfilled, (state, action) => {
      console.log("action :", action);
      state.cards = action.payload;
    });
});

export default sessionReducer;
