import { createAction, createReducer } from "@reduxjs/toolkit";
import { Session } from "../../src/@types/sequence";

interface SessionState {
  levelButton: boolean;
  session: Session | null;
}

const initialState: SessionState = {
  levelButton: false,
  session: null,
};

export const toggleLevelButton = createAction<boolean>(
  "session/Level button toggled"
);

const sessionReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleLevelButton, (state, action) => {
    state.levelButton = action.payload;
  });
});

export default sessionReducer;
