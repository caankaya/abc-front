import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import instance from "../../commons/axios";
import { ISequences } from "../../src/@types/sequences";
import { ISequence, Session } from "../../src/@types/sequence";

interface SequencesState {
  sequences: ISequences[] | null;
  sequence: ISequence[] | null;
  session: Session[] | null;
}

const initialState: SequencesState = {
  sequences: null,
  sequence: null,
  session: null,
};



export const getOneSession = createAction("Sequence/Get one session");

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

export const updateSequence = createAsyncThunk(
  "Sequence/The sequance has created", // nom de l'action
  async (sequenceData: FormData) => {
    const objData = Object.fromEntries(sequenceData);
    const userId = {
      user_id: Number(sessionStorage.getItem("id")),
    };
    Object.assign(objData, userId);
    const { data } = await instance.put(
      `/user/{{userId}}/sequence/{{sequenceId}}/`,
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

export const updateSession = createAsyncThunk(
  "Session/The session has updated",
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);
    const response = await instance.put(
      `/user/${sessionStorage.getItem("id")}/session/${sessionStorage.getItem("sessionId")}`,
      objData
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
    })
    .addCase(getOneSession, (state) => {
      if (state.sequence && state.sequence.length > 0) {
        const foundSessions = state.sequence.map((seq) =>
          seq?.sessions.find(
            (session) =>
              session.session_id === Number(sessionStorage.getItem("sessionId"))
          )
        );
        state.session = foundSessions.filter(
          (session) => session !== undefined
        ) as Session[];
      }
    })
});

export default sequencesReducer;
