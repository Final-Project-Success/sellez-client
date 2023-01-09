import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
// import Swiper styles
import "swiper/css";

import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
