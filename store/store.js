import { configureStore } from "@reduxjs/toolkit";
import temoignageReducer from "./temoignageSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    temoignage:temoignageReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
});

setupListeners(store.dispatch);
