import { AiFillShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../features/CartSlice";
import { Link } from "react-router-dom";
export default function CarouselItems({
  id,
  color,
  shadow,
  name,
  text,
  imgUrl,
  btn,
  rating,
  price,
}) {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, name, text, imgUrl, color, shadow, price };

    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color}  grid items-center justify-items-start rounded-xl py-5 px-5 transition-all duration-700 ease-in-out w-full min-h-full hover:scale-105`}
      >
        <div className={`grid items-center justify-items-start `}>
          <h1 className="text-slate-200 text-lg lg:text-lg md:text-base font-medium filter drop-shadow">
            {name}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>

          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => onAddToCart()}
            >
              <AiFillShopping className="icon-style text-slate-900" />
            </button>
            <Link
              to={`/detail-page/${id}`}
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
            >
              Details
            </Link>
          </div>
        </div>
        <div className={`flex items-center absolute -bottom-0 right-1`}>
          <img
            src={imgUrl}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]`}
          />
        </div>
      </div>
    </>
  );
}
