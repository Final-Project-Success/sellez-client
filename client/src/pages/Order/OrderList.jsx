import { Link } from "react-router-dom";
import OrderCard from "./OrderListComponents/OrderCard";
import Badge from "./OrderListComponents/Badge";
import ScrollToBottom from "react-scroll-to-bottom";
import { CgShoppingBag } from "react-icons/cg";

export default function OrderList() {
  return (
    <div className="detailspage min-h-screen flex justify-center items-center">
      {/* Importing Components */}

      {/* Container Start */}
      <div className="w-[90%] mx-auto flex justify-between p-16  rounded-xl ">
        <div className="w-full h-full flex justify-center items-center ">
          {/* Container Start */}
          <div className="content-container w-[80%] mx-auto p-4">
            {/* Heading */}
            <div>
              <h1 className="text-textBlack text-2xl font-bold flex gap-2">
                <CgShoppingBag className="text-buttonColor text-2xl" />
                My Order
              </h1>
            </div>

            {/* Card Headers */}
            <div className="w-[80%] mx-auto flex justify-between mt-8 px-8">
              <div className="w-[20%]">
                <span className="font-semibold text-mainTextColor text-lg">
                  Order #
                </span>
              </div>

              <div className="w-[20%]">
                <span className="font-semibold text-mainTextColor text-lg">
                  Status
                </span>
              </div>

              <div className="w-[20%]">
                <span className="font-semibold text-mainTextColor text-lg">
                  Date purchased
                </span>
              </div>

              <div className="w-[20%] text-center">
                <span className="font-semibold text-mainTextColor text-lg">
                  Total
                </span>
              </div>

              <div className="w-[20%]">
                <span className="font-semibold text-mainTextColor text-lg">
                  &nbsp;
                </span>
              </div>
            </div>

            {/* Cards */}

            <div className="w-[80%] mx-auto">
              <ScrollToBottom className="h-[300px] w-[700px]">
                <Link to="/orderDetails">
                  <OrderCard
                    orderId="f0ba538b"
                    badge={<Badge pending={true} text="Pending" />}
                    date="Jan 02, 2023"
                    price="$315.10"
                  />
                </Link>

                <Link to="/orderDetails">
                  <OrderCard
                    orderId="f0ba538b"
                    badge={<Badge pending={true} text="Processing" />}
                    date="Jan 03, 2023"
                    price="$330.10"
                  />
                </Link>

                <Link to="/orderDetails">
                  <OrderCard
                    orderId="f0ba538b"
                    badge={<Badge delivered={true} text="Delivered" />}
                    date="Jan 04, 2023"
                    price="$345.10"
                  />
                </Link>

                <Link to="/orderDetails">
                  <OrderCard
                    orderId="f0ba538b"
                    badge={<Badge delivered={true} text="Delivered" />}
                    date="Jan 05, 2023"
                    price="$360.10"
                  />
                </Link>

                <Link to="/orderDetails">
                  <OrderCard
                    orderId="f0ba538b"
                    badge={<Badge cancelled={true} text="Cancelled" />}
                    date="Jan 06, 2023"
                    price="$375.10"
                  />
                </Link>

                <Link to="/orderDetails">
                  <OrderCard
                    orderId="f0ba538b"
                    badge={<Badge cancelled={true} text="Cancelled" />}
                    date="Jan 07, 2023"
                    price="$390.10"
                  />
                </Link>
              </ScrollToBottom>
            </div>
          </div>
          {/* Container End */}
        </div>
      </div>
      {/* Container End */}
    </div>
  );
}
