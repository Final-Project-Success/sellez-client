import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import CarouselItems from "./CarouselItems.jsx";
const { useGetProductsQuery } = require("../features/apiSlice.js");
export default function PopularSales() {
  const { data: products, error, isLoading } = useGetProductsQuery();
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
      <div className="nike-container mt-10">
        <div className="grid items-center">
          <h1
            className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
         drop-shadow-lg"
          >
            Popular
          </h1>
        </div>
        {!products ? (
          ""
        ) : (
          <Splide options={splideOptions}>
            {products?.map((item, i) => (
              <SplideSlide key={i} className="pt-7 pb-14">
                <CarouselItems {...item} />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </>
  );
}
