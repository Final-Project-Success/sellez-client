export default function ShippingCost() {
  return (
    <div className="w-4/12 bg-white p-6 shadow-lg rounded-xl h-max">
      {/* Sub total */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm font-semibold">Subtotal:</p>
        <p className="text-textBlack font-semibold text-[17px]">$2,610.00</p>
      </div>

      {/* Shipping*/}
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm font-semibold">Shipping:</p>
        <p className="text-textBlack font-semibold text-[17px]">$0.00</p>
      </div>

      {/* Tax */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm font-semibold">Tax:</p>
        <p className="text-textBlack font-semibold text-[17px]">$40.00</p>
      </div>

      {/* Discount */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-400 text-sm font-semibold">Discount:</p>
        <p className="text-textBlack font-semibold text-[17px]">$0.00</p>
      </div>

      {/* Total */}
      <div className="text-end">
        <p className="text-textBlack font-semibold text-2xl">$2,650.00</p>
      </div>
    </div>
  );
}