import { Link } from "react-router-dom";

export default function OrderRow({ order, i }) {
  let date = new Date(order.createdAt).getDate();
  let month = new Date(order.createdAt).getMonth() + 1;
  let year = new Date(order.createdAt).getFullYear();
  let hours = new Date(order.createdAt).getHours();
  let Minutes = new Date(order.createdAt).getMinutes();
  let Seconds = new Date(order.createdAt).getSeconds();

  let dateResult = `${date}-${month}-${year} ${hours}:${Minutes}:${Seconds}`;
  console.log(order, i, '<< dari orderTable');

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  let warna = () => {
    if(order.status === 'PAID') {
      return `text-green-400`
    }
    if(order.status === 'PENDING') {
      return `text-yellow-400`
    }
    if(order.status === 'EXPIRED') {
      return `text-rerd-400`
    }
    
    
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
          {rupiah(order.totalPrice)}
        </th>
        <th class={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ${warna()}`}>
          {order.status}
        </th>
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="bg-white hover:bg-blue-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           <Link to={`${order.id}`}> See Detail</Link>
          </button>
        </th>
      </tr>
    </>
  );
}
