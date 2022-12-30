import { Link } from "react-router-dom";
export default function HomePage(params) {
  return (
    <>
      <h1> INI HOME </h1>
      <Link to={"/chat"} class="nav-link waves-effect" href="#">
        chat
      </Link>
    </>
  );
}
