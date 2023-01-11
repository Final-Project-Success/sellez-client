import { AiFillShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../features/CartSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function GridItems({
  id,
  color,
  shadow,
  name,
  Category,
  imgUrl,
  stock,
  price,
}) {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, name, Category, imgUrl, color, shadow, price };
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      heightAuto: true,
      title: `Added item to cart`,
      showConfirmButton: false,
      timer: 1000
    })
    dispatch(setAddItemToCart(item));
  };
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
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
      <div
        className={`relative bg-gradient-to-b ${color}  grid items-center justify-items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div className={`grid items-center justify-items-center`}>
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {name}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {Category.name}
          </p>

          <div className="flex items-center  w-28 my-2">
            <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">
                {rupiah(price)}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
              onClick={() => {
                onAddToCart();
                onCartToggle();
              }}
            >
              Stock: {stock}
            </button>
          </div>
          <div className="flex items-center gap-3">
            {localStorage.role === "customer" && (
              <button
                type="button"
                className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
                onClick={() => onAddToCart()}
              >
                <AiFillShopping className="icon-style text-slate-900" />
              </button>
            )}
            <Link
              to={`/detail-page/${id}`}
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
            >
              Detail
            </Link>
          </div>
        </div>
        <div className={`flex items-center justify-center`}>
          <img
            src={imgUrl}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 h-36 w-64`}
          />
        </div>
      </div>
    </>
  );
}
