import { createBrowserRouter } from "react-router-dom";
import ChatPage from "../pages/Chat-Web/ChatPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ShopPage from "../pages/ShopPage";
import AccountPage from "../pages/AccountPage";
import ManageAccount from "../components/MangeAccount";
import ProfileEdit from "../components/ProfileEdit";
import Favorites from "../components/Favorites";

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
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
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
]);

export default router;
