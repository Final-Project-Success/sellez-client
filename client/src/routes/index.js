import { createBrowserRouter } from "react-router-dom";
import ChatPage from "../pages/Chat-Web/ChatPage";
import HomePage from "../pages/HomePage/HomePage";
import BaseLayout from "../pages/BaseLayout";
import ShopPage from "../pages/ShopPage";
import AccountPage from "../pages/AccountPage";
import ManageAccount from "../components/MangeAccount";

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
        path: "/account",
        element: <AccountPage />,
        children: [
          {
            path: "",
            element: <ManageAccount />,
          },
        ],
      },
    ],
  },
]);

export default router;
