import Carousel from "./Carousel";
import CarouselTwo from "./CarouselTwo";

export default function TopRated() {
  return (
    <>
      {/* product grid */}
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6 mt-6">
          Top New arrival
        </h2>
        {/* card */}
        {/* <div className="grid grid-cols-4 gap-6"> */}
        {/* <CardOne /> */}
        {/* another card */}
        <Carousel />
        {/* </div> */}

        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-10 mt-10">
          Discount
        </h2>
        <CarouselTwo />
      </div>
    </>
  );
}
