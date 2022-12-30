import { Link } from "react-router-dom";
export default function HomePage(params) {
  return (
    <>
      <h1> INI HOME </h1>
      <Link to={"/chat"} class="nav-link waves-effect" href="#">
        chat
      </Link>
      {/* color red tailwind */}
      <h1 className="text-3xl font-bold underline text-red-500 hover:text-red-700">
        Hello world!
      </h1>
    </>
  );
}
