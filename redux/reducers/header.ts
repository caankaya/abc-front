import { createAction, createReducer } from "@reduxjs/toolkit";

interface HeaderState {
  buttonBurger: boolean;
}

const initialState: HeaderState = {
  buttonBurger: false,
};

export const togglerDropdown = createAction<boolean>(
  "header/toggle burger button"
);

const headerReducer = createReducer(initialState, (builder) => {
  builder.addCase(togglerDropdown, (state, action) => {
    state.buttonBurger = action.payload;
  });
});

export default headerReducer;
