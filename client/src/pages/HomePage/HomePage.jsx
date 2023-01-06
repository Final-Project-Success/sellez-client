import FlexContent from "../../components/FlexContent.jsx";
import Hero from "../../components/Hero.jsx";

import { useGetProductsQuery } from "../../features/apiSlice.js";
export default function HomePage(params) {
  const { data, error, isLoading } = useGetProductsQuery();
  console.log(data, error, isLoading);

  return (
    <>
      {/* <h1> INI HOME </h1>
      <Link to={"/chat"} class="nav-link waves-effect" href="#">
        chat
      </Link> */}
      {/* <Carousel /> */}
      {/* <TopRated /> */}
      <main className="flex flex-col gap-16 relative">
        <Hero />
        <FlexContent />
      </main>
    </>
  );
}
