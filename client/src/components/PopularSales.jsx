import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import psale2 from "../assets/product2.png";
import CarouselItems from "./CarouselItems.jsx";
export default function PopularSales() {
  const popularsales = {
    title: "Popular Sales",
    items: [
      {
        id: "0p0x1",
        title: "Nike Addapt BB 2.0",
        text: "MEN Running Shoes",
        rating: "4.9",
        btn: "Buy Now",
        img: psale2,
        price: "200",
        color: "from-blue-600 to-blue-500",
        shadow: "shadow-lg shadow-blue-500",
      },
      {
        id: "0p0x2",
        title: "Nike Martine Rose",
        text: "MEN Running Shoes",
        rating: "4.5",
        btn: "Buy Now",
        img: psale2,
        price: "200",
        color: "from-red-500 to-rose-500",
        shadow: "shadow-lg shadow-rose-500",
      },
      {
        id: "0p0x3",
        title: "Nike Smart Shoe 2.0",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: psale2,
        price: "200",
        color: "from-violet-500 to-indigo-500",
        shadow: "shadow-lg shadow-violet-500",
      },
      {
        id: "0M0x1",
        title: "Nike Air Low Premium",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: psale2,
        price: "150",
        color: "from-sky-600 to-indigo-600",
        shadow: "shadow-lg shadow-blue-500",
      },
      {
        id: "0M0x2",
        title: "Nike Air Force Green",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: psale2,
        price: "150",
        color: "from-green-500 to-emerald-500",
        shadow: "shadow-lg shadow-green-500",
      },
      {
        id: "0M0x3",
        title: "Nike Addapt BB Rose",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: psale2,
        price: "150",
        color: "from-red-500 to-rose-500",
        shadow: "shadow-lg shadow-rose-500",
      },
      {
        id: "0M0x4",
        title: "Nike Air Premium",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: psale2,
        price: "150",
        color: "from-orange-500 to-amber-500",
        shadow: "shadow-lg shadow-orange-500",
      },
      {
        id: "0M0x5",
        title: "Nike Adapt BB Pro",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: psale2,
        price: "150",
        color: "from-gray-900 to-yellow-500",
        shadow: "shadow-lg shadow-yellow-500",
      },
    ],
  };
  const splideOptions = {
    perPage: 3,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "2rem",
    pagination: false,
    padding: "3rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2 },
      768: { perPage: 1.3 },
      500: { perPage: 1, padding: "1rem" },
    },
  };
  return (
    <>
      <div className="nike-container">
        <div className="grid items-center">
          <h1
            className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
         drop-shadow-lg"
          >
            Popular
          </h1>
        </div>
        <Splide options={splideOptions}>
          {popularsales.items?.map((item, i) => (
            <SplideSlide key={i} className="pt-7 pb-14">
              <CarouselItems {...item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}
