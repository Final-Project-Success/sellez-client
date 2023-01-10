export default function RightSide() {
  return (
    <div className="w-[20%]">
      <div>
        {/* <!-- Reviews --> */}
        <div className="flex justify-between items-center">
          <span className="text-[22px] text-mainTextColor font-medium">
            Ratings:
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
          <div>
            <span className="text-[22px] text-mainTextColor font-medium">
              Size:
            </span>
          </div>

          {/* <!-- Size List --> */}
          <div>
            <ul className="grid grid-cols-3 gap-x-4 gap-y-2">
              <li className="bg-gray-100 text-mainTextColor font-medium cursor-pointer w-max px-3">
                37
              </li>
              <li className="bg-gray-100 text-mainTextColor font-medium cursor-pointer w-max px-3">
                38
              </li>
              <li className="bg-gray-100 text-mainTextColor font-medium cursor-pointer w-max px-3">
                39
              </li>
              <li className="bg-gray-100 text-mainTextColor font-medium cursor-pointer w-max px-3">
                40
              </li>
              <li className="bg-gray-100 text-mainTextColor font-medium cursor-pointer w-max px-3">
                41
              </li>
              <li className="bg-gray-100 text-mainTextColor font-medium cursor-pointer w-max px-3">
                42
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- share, chat, shortlist --> */}

        {/* <!-- Add to cart Button --> */}
        <div className="w-full mt-3">
          <button className="w-full bg-buttonColor text-black font-medium uppercase rounded-md py-4">
            Add to Cart
          </button>
        </div>

        {/* <!-- Review Buttons --> */}
      </div>
    </div>
  );
}
