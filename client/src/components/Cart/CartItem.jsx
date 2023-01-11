import { BiMinus, BiPlus } from "react-icons/bi";
import { HiTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../../features/CartSlice";
export default function CartItem({
  item: { id, name, text, imgUrl, color, shadow, price, cartQuantity },
}) {
  const dispatch = useDispatch();
  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        name,
        text,
        imgUrl,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        name,
        text,
        imgUrl,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        name,
        text,
        imgUrl,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={imgUrl}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              {rupiah(price)}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center w-[150px]">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {name}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                onClick={onDecreaseItemQTY}
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <BiMinus className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
                {cartQuantity}
              </div>
              <button
                type="button"
                onClick={onIncreaseItemQTY}
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <BiPlus className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              {rupiah(price * cartQuantity)}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
              onClick={onRemoveItem}
            >
              <HiTrash className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
