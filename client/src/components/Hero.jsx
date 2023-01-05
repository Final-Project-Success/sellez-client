import img from "../assets/hero.png";
import blob1 from "../assets/bgblob.svg";

export default function Hero() {
  return (
    <>
      <div className="relative h-auto w-full flex flex-col mb-20">
        <div
          style={{
            backgroundImage: `url(${blob1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[100vh] lg:h-[85vh] md:h-[75vh] sm:h-[65vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"
        ></div>
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-black">
              NIKE JUST DO IT!
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-gray-600">
              No excuses, just results.
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5"
            >
              SHOP NOW
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto"></div>
          </div>
          <div className="flex items-center">
            <img
              src={img}
              alt="hero-img/img"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
}
