
export default function OrderRow({order, i}) {
  let date = new Date(order.createdAt).getDate()
  let month = new Date(order.createdAt).getMonth() + 1
  let year = new Date(order.createdAt).getFullYear() 
  let hours = new Date(order.createdAt).getHours()
  let Minutes = new Date(order.createdAt).getMinutes()
  let Seconds = new Date(order.createdAt).getSeconds()

  let dateResult = `${date}-${month}-${year}`
  let orderTime = `${hours}:${Minutes}:${Seconds}`

  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  return (
    <>
      <tr>
      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
      {i + 1}.
        </th>
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
         {dateResult}
        </th>
         <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
         {orderTime}
        </th>
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
         {rupiah(order.totalPrice)}
        </th>
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
         {order.id}
        </th>
      </tr>
    </>
  );
}
