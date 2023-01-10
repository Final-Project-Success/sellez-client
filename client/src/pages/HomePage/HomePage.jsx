import Cart from "../../components/Cart/Cart.jsx";
import FlexContent from "../../components/FlexContent.jsx";
import Hero from "../../components/Hero.jsx";
import PopularSales from "../../components/PopularSales.jsx";
import TopSales from "../../components/TopSales.jsx";
import { useGetProductsQuery } from "../../features/apiSlice.js";
import ChatPage from "../Chat-Web/ChatPage.js";

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
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <ChatPage />
        <Hero />
        <PopularSales />
        <FlexContent />
        <TopSales />

        <FlexContent ifExists />
      </main>
    </>
  );
}
