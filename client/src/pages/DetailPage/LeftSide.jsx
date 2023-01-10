import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useGetProductByIdQuery } from "../../features/apiSlice";
import { useParams } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";

export default function LeftSide() {
  const [quantity, setQuantity] = useState(1);
  // how to get params id
  let { id } = useParams();

  const { data, isLoading, error } = useGetProductByIdQuery(id);
  console.log(data);
  return (
    <div className="w-[35%] pr-4">
      <div>
        {/* <!-- Heading --> */}
        <h1 className="text-3xl text-mainTextColor font-bold uppercase">
          {data?.name}
        </h1>

        {/* <!-- Description --> */}

        <div className="my-6 pr-4">
          <ScrollToBottom className="h-[250px]">
            <p className="text-mainTextColor font-medium">
              {data?.description}
            </p>
          </ScrollToBottom>
        </div>

        {/* <!-- Quantity Button --> */}
        <div className="w-full bg-white h-14 flex justify-center items-center border-buttonColor border-2">
          {/* <!-- Quantity Text --> */}
          <div className="w-full h-full px-2 bg-[#F5F5F5] text-center font-medium text-mainTextColor flex justify-center items-center">
            <span>Quantity</span>
          </div>

          {/* <!-- Quantity Count --> */}
          <div
            className="w-full flex justify-between
           items-center px-3 text-mainTextColor"
          >
            {/* <i
              className="fa-solid fa-minus cursor-pointer decrement"
              onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
            ></i> */}
            <AiOutlinePlus
              className="cursor-pointer decrement"
              onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
            />
            <span className="text-xl text-buttonColor font-semibold quantity">
              {quantity}
            </span>
            {/* <i
              className="fa-solid fa-plus cursor-pointer increment"
              onClick={() => setQuantity((prev) => prev + 1)}
            ></i> */}
            <AiOutlineMinus
              className="cursor-pointer increment"
              onClick={() => setQuantity((prev) => prev + 1)}
            />
          </div>

          {/* Add Button */}
          <div className="w-full bg-buttonColor h-full flex justify-center items-center border border-1 border-l-2">
            <button className="w-full text-black font-semibold">ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
}
