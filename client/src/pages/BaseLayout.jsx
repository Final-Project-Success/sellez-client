import { Outlet } from "react-router";
import NewNavbar from "../components/NewNavbar";
import OtpForm from "../components/OtpForm";
export default function BaseLayout() {
  return (
    <>
      <NewNavbar />
      <OtpForm/>
      <Outlet />
    </>
  );
}
