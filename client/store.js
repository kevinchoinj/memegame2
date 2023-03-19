import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers/index.js";

const makeStore = () =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
