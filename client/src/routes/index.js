import { createBrowserRouter, redirect } from "react-router-dom";
import ChatPage from "../pages/Chat-Web/ChatPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ShopPage from "../pages/ShopPage";
import AccountPage from "../pages/AccountPage";
import ManageAccount from "../components/MangeAccount";
import ProfileEdit from "../components/ProfileEdit";
import Favorites from "../components/Favorites";
import BaseLayout from "../pages/BaseLayout";
// import DetailPage from "../pages/DetailPage";
import StreamingPage from "../pages/StreamingPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
<<<<<<< HEAD
import DetailPage from "../pages/DetailPage/DetailPage";
=======
>>>>>>> 25f183904fff5f5b35fcbfab8459f1f8bf395c0a

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
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
      {
        path: "/account",
        element: <AccountPage />,
        children: [
          {
            path: "/account",
            element: <ManageAccount />,
          },
          {
            path: "/account/edit",
            element: <ProfileEdit />,
          },
          {
            path: "/account/favorites",
            element: <Favorites />,
          },
        ],
      },
    ],
  },
<<<<<<< HEAD
=======
  {
    path: "/detail-page",
    element: <DetailPage />,
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
>>>>>>> 25f183904fff5f5b35fcbfab8459f1f8bf395c0a
]);

export default router;
