import { DetailCard } from "./DetailCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DetailPage({order}) {
    return(
        <>
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
        {order.OrderProducts?.map((Op)=> {
        return <DetailCard Op={Op}/>
        })}
     
        
        </>
    )
}