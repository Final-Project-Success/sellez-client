import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel.jsx";
import NavbarComponent from "../../components/Navbar/NavbarComponent.jsx";
import TopRated from "../../components/TopRated.jsx";
export default function HomePage(params) {
  return (
    <>
      <NavbarComponent />
      {/* <h1> INI HOME </h1>
      <Link to={"/chat"} class="nav-link waves-effect" href="#">
        chat
      </Link> */}
      {/* <Carousel /> */}
      <TopRated />
    </>
  );
}
