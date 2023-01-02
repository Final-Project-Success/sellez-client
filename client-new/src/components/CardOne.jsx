import img from "../assets/nike-adapt-bb.png";

export default function CardOne() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-blue-600 to-blue-500 shadow-lg shadow-blue-500   rounded-xl py-4 px-5 transition-all duration-700 ease-in-out hover:scale-105 ">
        <div className="grid items-center justify-items-start">
          <h1 className="text-slate-200 text-xl font-medium filter drop-shadow">
            Nike Addapt
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base font-normal">
            MEN Running Shoes
          </p>
          <div className="flex items-center justify-between w-28 my-2">
            <h1 class="text-black text-sm font-medium">$200</h1>
          </div>
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="icon-style w-5 h-5 md:w-4 md:h-4"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h1 class="md:text-sm font-normal text-slate-100">4.9</h1>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="icon-style text-slate-900"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            class="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
          >
            Buy Now
          </button>
        </div>
        <div class="flex items-center absolute top-5 right-1">
          <img
            src={img}
            alt="img/item-img/0p0x1"
            class="transitions-theme hover:-rotate-12 h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
          />
        </div>
      </div>
    </>
  );
}
