import { configureStore } from "@reduxjs/toolkit"

import headerReducer from "./reducers/header"
import userReducer from "./reducers/user"

const store = configureStore({
  reducer: {
    header: headerReducer,
    user: userReducer,
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
