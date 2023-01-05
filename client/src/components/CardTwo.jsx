import { Link } from "react-router-dom";
import product1 from "../public/products/product1.jpg";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
export default function CardTwo() {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded overflow-hidden mr-10">
      <div className="h-72 w-72 ">
        <img
          className="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={product1}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded overflow-hidden"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white mb-10">Chair</h1>
        <div className="flex opacity-40 flex items-center justify-center gap-2">
          <Link className="rounded-full bg-primary py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-gray-800 transition">
            <FaRegHeart />
          </Link>
          <Link className="rounded-full bg-primary py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-gray-800 transition">
            <FaSearch />
          </Link>
        </div>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-4 pb-3 px-3">
            <div className="flex items-baseline mb-1 space-x-2">
              <p className="text-primary text-xl font-semibold">$45</p>
              <p className="text-sm text-gray-400 line-through">$55</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="text-xs text-gray-500 ml-3">(150)</div>
            </div>
          </div>
        </p>
        <Link className="block w-full py-1 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition">
          Add to cart
        </Link>
      </div>
    </div>
  );
}
