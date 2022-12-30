import { Link } from "react-router-dom";
import product1 from "../public/products/product1.jpg";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

export default function CardOne() {
  return (
    <div className="bg-white shadow rounded overflow-hidden mr-10">
      <div className="relative">
        <img src={product1} alt="" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center gap-2">
          <Link
            to={"/"}
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          >
            <FaRegHeart />
          </Link>
          <Link
            to={"/"}
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          >
            <FaSearch />
          </Link>
        </div>
      </div>
      {/* product image end */}
      <div className="p-4 pb-3 px-3">
        <Link>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Chair
          </h4>
        </Link>
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
      <Link className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
        Add to cart
      </Link>
    </div>
  );
}
