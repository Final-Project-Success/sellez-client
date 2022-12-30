import { Link } from "react-router-dom";
import logo from "../../public/img/logo png.png";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
export default function NabarComponent() {
  return (
    <>
      <div className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-24" />
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
              to="/cart"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <FaUserAlt className="ml-2" />
              </div>

              <div className="text-xs mt-1">Account</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
