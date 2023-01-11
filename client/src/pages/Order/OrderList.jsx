import { Link } from "react-router-dom";
import OrderCard from "./OrderListComponents/OrderCard";
import Badge from "./OrderListComponents/Badge";
import ScrollToBottom from "react-scroll-to-bottom";
import { CgShoppingBag } from "react-icons/cg";
import { useGetOrdersQuery } from "../../features/apiOrder";

export default function OrderList() {
  const { data, error, isLoading } = useGetOrdersQuery();

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
                  {data?.map((el) => {
                    return (
                      <OrderCard
                        orderId={`f0ba${el.id}`}
                        badge={<Badge pending={true} text={el.status} />}
                        date={new Date(el.createdAt).toISOString().slice(0, 10)}
                        price={el.totalPrice.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      />
                    );
                  })}
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
