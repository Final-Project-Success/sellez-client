import { Link } from "react-router-dom";
import logo from "../../public/img/logo png.png";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import profilePict from "../../public/products/product1.jpg";
export default function NabarComponent() {
  return (
    <>
      <div className="py-2 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-32" />
          </Link>

          {/* search bar */}
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-4 text-lg text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="Search..."
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>

          {/* icons */}
          <div className="flex items-center space-x-10">
            <Link
              to="/whishlist"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <FaRegHeart className="ml-2" />
              </div>
              <div
                className="abosulte text-xs leading-3 mt-1 
               "
              >
                Favorite
              </div>
              <span className="absolute right-0 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </Link>
            <Link
              to="/cart"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <FaShoppingBag />
              </div>
              <div className="text-xs leading-3 mt-1">Cart</div>
              <span className="absolute -right-3 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                1
              </span>
            </Link>
            <Link
              to="/account"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="flex-shrink-0">
                <img
                  src={profilePict}
                  alt="profile"
                  className="rounded-full w-14 h-14 border-gray-200 p-1 object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* bawah navbar */}
      <div className="bg-gray-800">
        <div className="container flex">
          {/* All category */}
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer">
            <span className="text-white">
              <FaBars />
            </span>
            {/* <span className="capitalize ml-2 text-white">All categories</span> */}
            {/* select item all categories */}
            <select className="ml-2  text-white bg-transparent border-none outline-none">
              <option value="all">All</option>
              <option value="category1">Category1</option>
            </select>

            {/* make another categories */}
          </div>

          {/* all categgory end */}
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </Link>
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition flex items-center "
              >
                <MdOutlineLiveTv className="text-xl mr-1  text-gray-200" />
                Live
              </Link>
            </div>
            <Link to="/" className="text-gray-200 hover:text-white transition">
              Login/Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
