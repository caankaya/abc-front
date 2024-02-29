import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import instance from "../../commons/axios";
import { ISequences } from "../../src/@types/sequences";
import { ISequence } from "../../src/@types/sequence";
import { useAppDispatch } from "../../commons/redux";

interface SequencesState {
  sequences: ISequences[] | null;
  sequence: ISequence[] | null;
}

const initialState: SequencesState = {
  sequences: null,
  sequence: null,
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

export const getOneSequence = createAsyncThunk(
  "Sequence reducer/Reading a sequence by id", // nom de l'action
  async (sequenceId: number) => {
    const response = await instance.get(
      `/user/${sessionStorage.getItem("id")}/sequence/${sequenceId}`
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

export const createSession = createAsyncThunk(
  "Session/The session has created",
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);
    const response = await instance.post(
      `/user/${sessionStorage.getItem("id")}/session`,
      objData
    );
    return response.data;
  }
);

export const deleteSession = createAsyncThunk(
  "Session reducer/deleteSession", // nom de l'action
  async (sessionId: number) => {
    const response = await instance.delete(
      `/user/${sessionStorage.getItem("id")}/session/${sessionId}`
    );
    return response.data;
  }
);

const sequencesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllSequences.fulfilled, (state, action) => {
      state.sequences = action.payload;
    })
    .addCase(getOneSequence.fulfilled, (state, action) => {
      state.sequence = action.payload;
    })
    .addCase(createSession.fulfilled, (state, action) => {
      console.log("state :", state);
      console.log("action :", action);
    })
    .addCase(deleteSequence.fulfilled, (state, action) => {
      if (state.sequences) {
        state.sequences = state?.sequences.filter(
          (sequence) => sequence.id !== action.meta.arg
        );
      }
    })
    .addCase(deleteSession.fulfilled, (state, action) => {
      if (state.sequence) {
        state.sequence[0].sessions = state?.sequence[0].sessions.filter(
          (session) => session.session_id !== action.meta.arg
        );
      }
    });
});

export default sequencesReducer;
