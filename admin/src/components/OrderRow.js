export default function OrderRow({ order, i }) {
  // let date = new Date(order.createdAt).getDate()
  // let month = new Date(order.createdAt).getMonth() + 1
  // let year = new Date(order.createdAt).getFullYear()
  // let hours = new Date(order.createdAt).getHours()
  // let Minutes = new Date(order.createdAt).getMinutes()
  // let Seconds = new Date(order.createdAt).getSeconds()

  // console.log(date, month, year, hours, Minutes, Seconds);
  // let date = order.createdAt
  // let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  // const arr = order.createdAt.getFullYear()
  // console.log(dateMDY);
  return (
    <>
      <tr>
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          {order.createdAt}
        </th>
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          200000
        </th>
      </tr>
    </>
  );
}
