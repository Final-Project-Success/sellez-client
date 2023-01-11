export default function OrderRecordCard({
  img,
  name,
  price,
  quantity,
  sizeColor,
}) {
  return (
    <div className="flex justify-between items-center mb-8">
      {/* Image */}
      <div className="w-2/12">
        <img src={img} alt="" width="50" />
      </div>

      {/* Info */}
      <div className="w-full">
        <p className="text-textBlack font-semibold">{name}</p>
        <p className="text-grayText text-sm">
          ${price} x {quantity}
        </p>
      </div>

      {/* Properties */}
      <div className="w-full text-center">
        <p className="text-grayText font-medium">
          Product properties: {sizeColor}
        </p>
      </div>

      {/* review */}
      <div className="w-full text-center">
        <span className="text-badgeRed hover:bg-badgeRedBg duration-200 font-semibold px-4 py-2 cursor-pointer text-sm rounded-md">
          Write a Review
        </span>
      </div>
    </div>
  );
}
