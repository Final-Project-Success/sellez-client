import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./features/product/productsSlice";
import { productsApi } from "../features/apiSlice";
import { chatsApi } from "../features/apiChat";
import { usersApi } from "../features/apiUser";
import { ordersApi } from "../features/apiOrder";
import CartSlice from "../features/CartSlice.js";
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(chatsApi.middleware)
      .concat(ordersApi.middleware)
      .concat(usersApi.middleware);
  },
});
