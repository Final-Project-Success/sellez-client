import { setAddItemToCart } from "../../features/CartSlice";
import { useDispatch } from "react-redux";
export default function RightSide({ data }) {
  // const { id } = useParams();
  // const { data, isLoading, error } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = {
      id: data.id,
      name: data.name,
      Category: data.Category,
      imgUrl: data.ImgUrl,
      color: data.color,
      shadow: data.shadow,
      price: data.price,
    };

    dispatch(setAddItemToCart(item));
  };
  console.log(data, "<");
  return (
    <div className="w-[20%]">
      <div>
        {/* <!-- Reviews --> */}
        <div className="flex justify-between items-center">
          <span className="text-[22px] text-mainTextColor font-medium">
            Rating:
          </span>
          <div>
            <i className="fa-solid fa-star text-orange-400 text-xl"></i>
            <i className="fa-solid fa-star text-orange-400 text-xl"></i>
            <i className="fa-solid fa-star text-orange-400 text-xl"></i>
            <i className="fa-solid fa-star text-orange-400 text-xl"></i>
            <i className="fa-regular fa-star text-xl text-gray-200"></i>
          </div>
          <span className="text-[22px] text-mainTextColor font-medium">
            4.9
          </span>
        </div>

        {/* <!-- Sizes --> */}
        <div className="flex justify-between my-8">
          {/* <!-- Text --> */}

          {/* <!-- Size List --> */}
          <div></div>
        </div>

        {/* <!-- share, chat, shortlist --> */}

        {/* <!-- Add to cart Button --> */}
        <div className="w-full mt-3">
          <button
            className="w-full bg-buttonColor text-black font-medium uppercase rounded-md py-4"
            onClick={() => onAddToCart()}
          >
            Add to Cart
          </button>
        </div>

        {/* <!-- Review Buttons --> */}
      </div>
    </div>
  );
}
