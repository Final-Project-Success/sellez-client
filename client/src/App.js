import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./features/apiSlice";
function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <RouterProvider router={router} />;
      </ApiProvider>
    </Provider>
  );
}

export default App;
