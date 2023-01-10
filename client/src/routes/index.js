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
import DetailPage from "../pages/DetailPage/DetailPage";
<<<<<<< HEAD
import RegisterPage from "../pages/RegisterPage";
=======
>>>>>>> 2bb0d8f60214762b0e1d1d6169fa23e76d1c6f55

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
=======
>>>>>>> 2bb0d8f60214762b0e1d1d6169fa23e76d1c6f55
]);

export default router;
