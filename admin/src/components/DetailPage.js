import { DetailCard } from "./DetailCard";

export default function DetailPage({ order }) {

    const rupiah = (number)=>{
		return new Intl.NumberFormat("id-ID", {
		  style: "currency",
		  currency: "IDR"
		}).format(number);
	  }

  return (
    <>
    <div>
      <div class="py-8 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div class="flex justify-start item-start space-y-2 flex-col">
          <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Order {order.id}
          </h1>
          <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
            21st Mart 2021 at 10:34 PM
          </p>
        </div>
      </div>

      {order.OrderProducts?.map((Op) => {
        return <DetailCard Op={Op}  />;
      })}
         <div class="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
          <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
            <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
              <div class="flex justify-between w-full">
                <p class="text-base dark:text-white leading-4 text-gray-800">Sub Total</p>
                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{rupiah(order.totalPrice)}</p>
              </div>
              <div class="flex justify-between items-center w-full">
                <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{rupiah(order.shippingCost)}</p>
              </div>
            </div>
            <div class="flex justify-between items-center w-full">  
              <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
              <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{rupiah(order.totalPrice + order.shippingCost)}</p>
            </div>
          </div>
          <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
            <div class="flex justify-between items-start w-full">
              <div class="flex justify-center items-center space-x-4">
              
                <div class="flex flex-col justify-start items-center">
                  <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD Delivery<br /><span class="font-normal">Delivery with 24 Hours</span></p>
                </div>
              </div>
              <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">{rupiah(order.shippingCost)}</p>
            </div>
            <div class="w-full flex justify-center items-center">
              <button class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">Pajangan dulu</button>
            </div>
          </div>
        </div>
      </div>
   
  
    
    
    </>
  );
}
