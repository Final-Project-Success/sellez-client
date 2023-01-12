export default function ShippingCost() {
  const toIDR = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };
  return (
    <div className="w-4/12 bg-white p-6 shadow-lg rounded-xl h-max">
      {/* Sub total */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm font-semibold">Subtotal:</p>
        <p className="text-textBlack font-semibold text-[17px]">
          {toIDR(localStorage.totalPrice)}
        </p>
      </div>

      {/* Shipping*/}
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm font-semibold">Shipping:</p>
        <p className="text-textBlack font-semibold text-[17px]">
          {toIDR(localStorage.ongkir)}
        </p>
      </div>

      {/* Total */}
      <div className="text-end">
        <p className="text-textBlack font-semibold text-2xl">$2,650.00</p>
      </div>
    </div>
  );
}
