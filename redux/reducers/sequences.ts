import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
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

export const createSequence = createAsyncThunk(
  "Sequence/The sequance has created", // nom de l'action
  async (sequenceData: FormData) => {
    const objData = Object.fromEntries(sequenceData);
    const userId = {
      user_id: Number(sessionStorage.getItem("id")),
    };
    Object.assign(objData, userId);
    const { data } = await instance.post(
      `/user/${sessionStorage.getItem("id")}/sequence`,
      objData
    );
    return data;
  }
);

export const deleteSequence = createAsyncThunk(
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
    .addCase(deleteSequence.fulfilled, (state, action) => {
      if (state.sequences) {
        state.sequences = state?.sequences.filter(
          (sequence) => sequence.id !== action.meta.arg
        );
      }
    });
});

export default sequencesReducer;
