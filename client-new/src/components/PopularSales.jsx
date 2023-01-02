import Slider from "react-slick";
import CardOne from "./CardOne";
// import blob1 from "../assets/blob1.png";

export default function PopularSales() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <>
        <div className="mt-20 relative h-auto w-auto flex flex-col mb-20">
          <div
            style={{
              //   backgroundImage: `url(${blob1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[100vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 "
          ></div>
          <div className="nike-container">
            <div className=" items-center">
              <h1
                className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
         drop-shadow-lg"
              >
                Popular Sales
              </h1>
            </div>
            {/* <div className="grid items-center justify-items-center gap-7 lg:gap-5 mt-7 grid-cols-3 xl:grid-cols-2 sm:grid-cols-1">
              {items?.map((item, i) => (
                <Item {...item} key={i} ifExists={ifExists} />
              ))}
            </div> */}
            {/* <Slider {...settings}> */}
            {/* {items?.map((item, i) => ( */}

            {/* // ))} */}
            {/* </Slider> */}
          </div>
        </div>
        <CardOne />
      </>
    </>
  );
}
