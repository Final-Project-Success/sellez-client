import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./features/product/productsSlice";
import { productsApi } from "../features/apiSlice";
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware).concat();
  },
});
