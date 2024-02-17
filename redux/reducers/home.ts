import { createAction, createReducer } from '@reduxjs/toolkit';

interface HomeState {
  test: string | null;
}

const initialState: HomeState = {
  test: null,
};

export const testAction = createAction<string>('home/test');

const homeReducer = createReducer(initialState, (builder) => {
  builder.addCase(testAction, (state, action) => {
    state.test
  });
});

export default homeReducer;
