import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import BaseLayout from "../pages/BaseLayout";
import StreamingPage from "../pages/StreamingPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import RegisterPage from "../pages/RegisterPage";
import ChatPageNew from "../pages/ChatPageNew";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/streaming",
        element: <StreamingPage />,
      },
      {
        path: "/detail-page/:id",
        element: <DetailPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) return redirect("/");
      else {
        return null;
      }
    },
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: () => {
      if (localStorage.access_token) return redirect("/");
      else {
        return null;
      }
    },
  },
]);

export default router;
