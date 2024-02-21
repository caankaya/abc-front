import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { ICards } from "../../src/@types/cards";
import { ICard } from "../../src/@types/card";
import instance from "../../commons/axios";

interface ToolState {
  cards: ICards[] | null;
  card: ICard | null;
}

const initialState: ToolState = {
  cards: null,
  card: null,
};

export const getCards = createAsyncThunk(
  "Card/fetching all cards",
  async () => {
    const response = await instance.get("/storyBoard/cards");
    return response.data;
  }
);

export const getCard = createAsyncThunk(
  "Card/fetching a card by id",
  async (cardId: number) => {
    const response = await instance.get(`/storyBoard/cards/${cardId}`);
    return response.data;
  }
);

export const clearCardModal = createAction("Card/Cleaning card modal");

const cardReducer = createReducer(initialState, (builder) => {
  builder
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

export default cardReducer;
