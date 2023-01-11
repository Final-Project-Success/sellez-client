export default function ProgressBar() {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-progressBg w-max p-4 rounded-full flex justify-center items-center">
        <i className="fa-solid fa-box-open text-2xl text-white"></i>
      </div>
      <div className="w-full bg-progressBg h-1"></div>
      <div className="bg-progressBg w-max p-4 rounded-full flex justify-center items-center">
        <i class="fa-solid fa-truck text-2xl text-white"></i>
      </div>
      <div className="w-full bg-inCompleteBg h-1"></div>
      <div className="bg-inCompleteBg w-max p-4 rounded-full flex justify-center items-center">
        <i class="fa-solid fa-hand-holding-heart text-2xl text-progressBg"></i>
      </div>
    </div>
  );
}
