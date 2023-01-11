export default function OrderCard({ orderId, badge, date, price }) {
  return (
    <div className="bg-white w-full flex justify-between items-center shadow-md py-[10px] rounded-xl px-8 cursor-pointer my-4">
      <div className="w-[20%]">
        <span className="font-semibold text-textBlack text-lg">{orderId}</span>
      </div>

      <div className="w-[20%]">{badge}</div>

      <div className="w-[20%]">
        <span className="font-medium text-textBlack">{date}</span>
      </div>

      <div className="w-[20%] text-center pl-3">
        <span className="font-medium text-textBlack">{price}</span>
      </div>

      <div className="w-[20%] text-end">
        <span className="font-semibold text-textBlack text-xl">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
}
