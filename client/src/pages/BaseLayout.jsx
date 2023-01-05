import NavbarComponent from "../components/Navbar/NavbarComponent";
import { Outlet } from "react-router";
import NewNavbar from "../components/NewNavbar";
export default function BaseLayout() {
  return (
    <>
      <NewNavbar />
      <Outlet />
    </>
  );
}
