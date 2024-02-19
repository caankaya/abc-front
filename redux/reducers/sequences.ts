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
    const response = await instance.get("/user/userId/sequence");
    return response.data;
  }
);

const sequencesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllSequences.fulfilled, (state, action) => {
    console.log("state :", state);
    console.log("action :", action);
  });
});

export default sequencesReducer;
