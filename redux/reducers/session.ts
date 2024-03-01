import { createAction, createReducer } from "@reduxjs/toolkit";

interface SessionState {
  levelButton: boolean;
  updateModal: boolean;
}

const initialState: SessionState = {
  levelButton: false,
  updateModal: false,
};

export const toggleLevelButton = createAction<boolean>(
  "session/Level button toggled"
);

export const openUpdateModal = createAction<boolean>(
  "The update modal opening"
);

const sessionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleLevelButton, (state, action) => {
      state.levelButton = action.payload;
    })
    .addCase(openUpdateModal, (state, action) => {
      state.updateModal = action.payload;
    });
});

export default sessionReducer;
