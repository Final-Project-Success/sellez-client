import Image from "../../assets/product2.png";
import Image2 from "../../assets/product8.png";
import Image3 from "../../assets/product2.png";
import { CgShoppingBag } from "react-icons/cg";
import ProgressBar from "./OrderDetailComponents/ProgressBar";
import ShippingCost from "./OrderDetailComponents/ShippingCost";
import ShippingForm from "./OrderListComponents/ShippingForm";
import OrderRecordCard from "./OrderListComponents/OrderRecordCard";

export default function OrderDetail() {
  return (
    <div className="detailspage min-h-screen flex justify-center items-center">
      {/* Importing Components */}

      {/* Container Start */}
      <div className="w-[90%] mx-auto flex justify-between p-16  rounded-xl ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="content-container w-[80%] mx-auto p-4">
            {/* Heading */}
            <div className="flex justify-between px-4">
              <h1 className="text-textBlack text-2xl font-bold flex gap-2">
                <CgShoppingBag className="text-buttonColor text-2xl" />
                Order Details
              </h1>
              <button className="bg-badgeRedBg text-badgeRed py-2 px-6 font-semibold rounded-md">
                Order Again
              </button>
            </div>

            {/* Order Process */}
            <div className="bg-white rounded-xl px-8 mx-4 pt-16 pb-8 shadow-xl my-8">
              {/* ProgressBar */}
              <ProgressBar />

              {/* Estimatee Deilivery */}
              <div className="mt-8 mb-4 text-end">
                <span className="bg-badgeRedBg text-badgeRed py-2 px-6 rounded-full font-semibold">
                  Estimated Delivery Date 4th October
                </span>
              </div>
            </div>

            {/* Order Details */}
            <div className="mx-4 bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center bg-[#F3F5F9] p-4">
                {/* ID */}
                <div className="w-full">
                  <span className="text-grayText font-semibold">Order ID:</span>
                  <span className="text-textBlack font-medium ml-2">
                    1f10985b-09a8-4d93-b5ef-bd8a73bd6067
                  </span>
                </div>

                {/* Placed In */}
                <div className="w-full text-center">
                  <span className="text-grayText font-semibold">
                    Placed on:
                  </span>
                  <span className="text-textBlack font-medium ml-2">
                    10 Nov, 2022
                  </span>
                </div>

                {/* Placed In */}
                <div className="w-full text-center">
                  <span className="text-grayText font-semibold">
                    Delivered on:
                  </span>
                  <span className="text-textBlack font-medium ml-2">
                    11 Jan, 2023
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 pt-4">
                {/* Card */}
                <OrderRecordCard
                  img={Image}
                  name="Shoe 1 (2019)"
                  price="226.00"
                  quantity="4"
                  sizeColor="Black, L"
                />
                <OrderRecordCard
                  img={Image2}
                  name="Shoe 2 (2020)"
                  price="426.00"
                  quantity="2"
                  sizeColor="Green, L"
                />
                <OrderRecordCard
                  img={Image3}
                  name="Shoe 3 (2022)"
                  price="126.00"
                  quantity="10"
                  sizeColor="Blue, L"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="py-8 mx-4">
              {/* Shipping Content */}

              <div className="flex justify-between gap-8 mt-4">
                {/* Shipping Form */}
                <ShippingForm />

                {/* Shipping Details */}
                <ShippingCost />
              </div>
            </div>

            {/* Buttons */}
            <div className="w-8/12 mb-4 flex justify-between items-center gap-8 pl-6 pr-8">
              <button className="w-full bg-[#F8F9FD] text-progressBg font-semibold py-2 rounded-md">
                Back to Cart
              </button>
              <button className="w-full bg-progressBg text-white font-semibold py-2 rounded-md">
                Procced to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
