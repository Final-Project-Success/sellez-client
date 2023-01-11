import { createBrowserRouter, redirect } from "react-router-dom";
import NewCategoryForm from "../components/NewCategoryForm";

import Home from "../views/Home";
import Login from "../views/Login";
import NewProductSection from "../views/NewProductSect";
import OrdersSection from "../views/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
     loader: () => {
            if(!localStorage.getItem('access_token')) return redirect('/login')
            else {
                return null
            }
        }
  },
  {
    path: '/orders',
    element: <OrdersSection />,
    loader: () => {
      if(!localStorage.getItem('access_token')) return redirect('/login')
      else {
          return null
      }
  }
  },
  {
    path: '/login',
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) return redirect("/");
      else {
        return null;
      }
    },
  },
  {
    path: '/new-product',
    element: <NewProductSection />
  },
  {
    path: '/new-category',
    element: <NewCategoryForm />
  }
]);

export default router;
