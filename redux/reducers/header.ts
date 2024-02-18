import { createAction, createReducer } from "@reduxjs/toolkit";

interface HeaderState {
  buttonBurger: boolean;
  loginModal: boolean;
}

const initialState: HeaderState = {
  buttonBurger: false,
  loginModal: false,
};

export const togglerDropdown = createAction<boolean>(
  "header/toggle burger button"
);

export const openLoginModal = createAction<boolean>(
  "header/toggle login modal"
);

const headerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(togglerDropdown, (state, action) => {
      state.buttonBurger = action.payload;
    })
    .addCase(openLoginModal, (state, action) => {
      state.loginModal = action.payload;
    });
});

export default headerReducer;
