import { configureStore } from "@reduxjs/toolkit";

import headerReducer from "./reducers/header";
import userReducer from "./reducers/user";
import sequenceReducer from "./reducers/sequences";
import sessionReducer from "./reducers/session";
import toolReducer from "./reducers/card";

const store = configureStore({
  reducer: {
    header: headerReducer,
    user: userReducer,
    sequence: sequenceReducer,
    session: sessionReducer,
    card: toolReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
