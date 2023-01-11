export default function Badge({ text, pending, delivered, cancelled }) {
  return (
    <div
      className={`${pending && "bg-badgeGray text-mainTextColor"} ${
        delivered && "bg-badgeGreenBg text-badgeGreen"
      } ${
        cancelled && "bg-badgeRedBg text-badgeRed"
      } w-max px-4 rounded-full text-xs font-medium pt-[2px] pb-[4px]`}
    >
      {text}
    </div>
  );
}
