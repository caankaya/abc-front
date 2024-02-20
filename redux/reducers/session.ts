import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import instance from "../../commons/axios";
import { ICards } from "../../src/@types/cards";
import { ICard } from "../../src/@types/card";

interface SessionState {
  levelButton: boolean;
  cards: ICards[] | null;
  card: ICard | null;
}

const initialState: SessionState = {
  levelButton: false,
  cards: null,
  card: null,
};

export const toggleLevelButton = createAction<boolean>(
  "session/Level button toggled"
);

export const getCards = createAsyncThunk(
  "Session/fetching all cards",
  async () => {
    const response = await instance.get("/storyBoard/cards");
    return response.data;
  }
);

export const getCard = createAsyncThunk(
  "Session/fetching a card by id",
  async (cardId: number) => {
    const response = await instance.get(`/storyBoard/cards/${cardId}`);
    return response.data;
  }
);

export const clearCardModal = createAction("Session/Cleaning card modal");

const sessionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleLevelButton, (state, action) => {
      state.levelButton = action.payload;
    })
    .addCase(getCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    })
    .addCase(getCard.fulfilled, (state, action) => {
      state.card = action.payload[0];
    })
    .addCase(clearCardModal, (state) => {
      state.card = null;
    });
});

export default sessionReducer;
