import { Outlet } from "react-router";
import NewNavbar from "../components/NewNavbar";
import Cart from "../components/Cart/Cart.jsx";
import OtpForm from "../components/OtpForm";

export default function BaseLayout() {
  return (
    <>
      <NewNavbar />
      <OtpForm />
      <Cart />

      <Outlet />
    </>
  );
}
