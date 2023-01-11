import { Outlet } from "react-router";
import NewNavbar from "../components/NewNavbar";
import Cart from "../components/Cart/Cart.jsx";

export default function BaseLayout() {
  return (
    <>
      <NewNavbar />
      <Cart />

      <Outlet />
    </>
  );
}
