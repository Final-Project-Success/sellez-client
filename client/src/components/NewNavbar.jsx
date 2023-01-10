import { useEffect, useState } from "react";
import logo from "../public/img/logo png.png";
import { FiSearch } from "react-icons/fi";
import { BiShoppingBag, BiLogIn, BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../features/CartSlice.js";
import { RiLiveLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
export default function NewNavbar() {
  const [navState, setNavState] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
  const navigate = useNavigate();
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
    navigate("/");
  };
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  // const goToStreamingPge = () => {

  //   window.location.href = "/streaming";
  // };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    if (!localStorage.access_token) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
    // return () => {
    //   window.removeEventListener("scroll", onNavScroll);
    // };
  }, []);
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo/img"
                className={`w-16 h-auto ${navState && "filter brightness-0"}`}
              />
            </Link>
          </div>
          <ul className="flex items-center justify-center gap-2">
            {/* <li className="grid items-center">
              <FiSearch
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li> */}
            {isLogin && (
              <li className="grid items-center">
                <button
                  type="button"
                  onClick={onCartToggle}
                  className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                >
                  <BiShoppingBag
                    className={`icon-style ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  />
                  <div
                    className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                      navState
                        ? "bg-slate-900 text-slate-100 shadow-slate-900"
                        : "bg-slate-100 text-slate-900 shadow-slate-100"
                    }`}
                  >
                    {totalQTY}
                  </div>
                </button>
              </li>
            )}
            {isLogin && (
              <li className="grid items-center">
                <Link className="grid items-center" to={"/streaming"}>
                  <RiLiveLine
                    className={`icon-style ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  />
                </Link>
              </li>
            )}

            <li className="grid items-center">
              {isLogin ? (
                <BiLogOut
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                  onClick={handleLogout}
                />
              ) : (
                <Link to={"/login"}>
                  <BiLogIn
                    className={`icon-style ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
