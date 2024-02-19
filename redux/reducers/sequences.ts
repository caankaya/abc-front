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

export const deleteOneSequence = createAsyncThunk(
  "sequence/the sequence has deleted", // nom de l'action
  async (sequenceId: number) => {
    const response = await instance.delete(
      `/user/${sessionStorage.getItem("id")}/sequence/${sequenceId}/`
    );
    return response.data;
  }
);

const sequencesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllSequences.fulfilled, (state, action) => {
      state.sequences = action.payload;
    })
    .addCase(deleteOneSequence.fulfilled, () => {});
});

export default sequencesReducer;
