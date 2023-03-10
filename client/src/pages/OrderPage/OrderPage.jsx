import ShippingForm from "../Order/OrderListComponents/ShippingForm";
import ShippingCost from "../Order/OrderDetailComponents/ShippingCost";
import { CgShoppingBag } from "react-icons/cg";
export default function OrderPage() {
  return (
    <div className="detailspage min-h-screen flex justify-center items-center">
      {/* Importing Components */}

      {/* Container Start */}
      <div className="w-[90%] mx-auto flex justify-between p-16  rounded-xl ">
        <div className="w-[90%] mx-auto flex justify-between p-16  rounded-xl ">
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[80%] mx-auto p-4">
              {/* Heading */}
              <div className="flex justify-between px-4 mb-3">
                <h1 className="text-textBlack text-2xl font-bold flex gap-2">
                  <CgShoppingBag className="text-buttonColor text-2xl" />
                  Shipping Address
                </h1>
              </div>
              <div className="flex justify-between gap-8 mt-4">
                <ShippingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
