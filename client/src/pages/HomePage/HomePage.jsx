import Hero from "../../components/Hero.jsx";
import TopRated from "../../components/TopRated.jsx";
import { useGetProductsQuery } from "../../features/apiSlice.js";
export default function HomePage(params) {
  const { data, error, isLoading } = useGetProductsQuery();
  console.log(data);
  return (
    <>
      {/* <h1> INI HOME </h1>
      <Link to={"/chat"} class="nav-link waves-effect" href="#">
        chat
      </Link> */}
      {/* <Carousel /> */}
      {/* <TopRated /> */}
      <Hero />
    </>
  );
}
