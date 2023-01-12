// import Cart from "../../components/Cart/Cart.jsx";
import FlexContent from "../../components/FlexContent.jsx";
import Hero from "../../components/Hero.jsx";
import PopularSales from "../../components/PopularSales.jsx";
import TopSales from "../../components/TopSales.jsx";
import { useGetProductsQuery } from "../../features/apiSlice.js";
import ChatPage from "../Chat-Web/ChatPage.js";

export default function HomePage(params) {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <>
      {/* <Cart /> */}
      <main className="flex flex-col gap-20 relative">
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
