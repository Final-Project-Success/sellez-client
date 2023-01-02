import "./App.css";
import BigBanner from "./components/BigBanner";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularSales from "./components/PopularSales";
export default function App() {
  return (
    <>
      <Navbar />

      {/* <main className="flex flex-col gap-16 relative"> */}
      <BigBanner />
      <PopularSales />
      {/* </main> */}
    </>
  );
}
