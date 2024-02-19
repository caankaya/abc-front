import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import instance from "../../commons/axios";
import { ISequence } from "../../src/@types/sequences";

interface SequencesState {
  sequences: ISequence[] | null;
}

const initialState: SequencesState = {
  sequences: null,
};

export const getAllSequences = createAsyncThunk(
  "/getAllSequences", // nom de l'action
  async () => {
    const response = await instance.get(
      `/user/${sessionStorage.getItem("id")}/sequence`
    );
    return response.data;
  }
);

const sequencesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllSequences.fulfilled, (state, action) => {
    state.sequences = action.payload;
  });
});

export default sequencesReducer;
