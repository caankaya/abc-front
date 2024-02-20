import { createAction, createReducer } from "@reduxjs/toolkit";

interface SessionState {
  levelButton: boolean;
}

const initialState: SessionState = {
  levelButton: false,
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
