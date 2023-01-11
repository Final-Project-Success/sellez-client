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
      </div>
    </div>
  );
}
