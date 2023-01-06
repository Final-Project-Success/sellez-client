import { createBrowserRouter } from "react-router-dom";
import CategoriesSection from "../views/Categories";
import Home from "../views/Home";
import Login from "../views/Login";
import NewProductSection from "../views/NewProductSect";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //  loader: () => {
    //         if(!localStorage.getItem('access_token')) return redirect('/login')
    //         else {
    //             return null
    //         }
    //     }
  },
  {
    path: '/categories',
    element: <CategoriesSection />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/new-product',
    element: <NewProductSection />
  }
]);

export default router;