import { setAddItemToCart } from "../../features/CartSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function ShopCard({ item }) {
  const { Category, id, name, imgUrl, price, color, shadow, text } = item;
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, name, Category, imgUrl, color, shadow, price };
    Swal.fire({
      position: "top-end",
      icon: "success",
      heightAuto: true,
      title: `Added item to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    dispatch(setAddItemToCart(item));
  };
  return (
    <div>
      <div
        className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out`}
      >
        <div className="flex items-center gap-4">
          <div>
            <img
              src={imgUrl}
              alt={name}
              className="w-36 h-auto object-fill lg:w-28"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              {rupiah(price)}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {name}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => onAddToCart()}
            className="w-full bg-white mt-2 py-1"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
