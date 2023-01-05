import { Link } from "react-router-dom";
import product1 from "../public/products/product1.jpg";
import { BsFillTrashFill } from "react-icons/bs";
export default function Favorites() {
  return (
    <>
      <div class="col-span-9 mt-6 lg:mt-0 space-y-4">
        {/* single WishCard */}
        <div class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          {/* img */}
          <div class="w-28 flex-shrink-0">
            <img src={product1} alt="product images" class="w-full" />
          </div>
          {/* card content */}
          <div class="md:w-1/3 w-full">
            <h2 class="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
              Italian L Shape Sofa
            </h2>
            <p class="text-gray-500 text-sm">
              Availability: <span class="text-green-600">In Stock</span>
            </p>
          </div>
          <div class="">
            <p class="text-primary text-lg font-semibold">$320.00</p>
          </div>
          <Link class="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
            Add to cart
          </Link>
          <div class="text-red-600 hover:text-primary cursor-pointer">
            <BsFillTrashFill />
          </div>
          {/* end */}
        </div>
      </div>
    </>
  );
}
