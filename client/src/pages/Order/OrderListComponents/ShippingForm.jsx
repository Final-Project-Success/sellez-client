export default function ShippingForm() {
  return (
    <div className="w-8/12 bg-white p-6 shadow-lg rounded-xl">
      <div className="mb-4">
        <h2 className="text-textBlack text-xl font-semibold">
          Shipping Address
        </h2>
      </div>
      <form>
        {/* Heading */}
        {/* Name and Email */}
        <div className="flex justify-between items-center gap-10 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white border-gray-300 border-2 outline-none rounded-md px-4 py-[6px] focus:border-progressBg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white border-gray-300 border-2 outline-none rounded-md px-4 py-[6px] focus:border-progressBg"
          />
        </div>

        {/* Phone and Company */}
        <div className="flex justify-between items-center gap-10 mb-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-white border-gray-300 border-2 outline-none rounded-md px-4 py-[6px] focus:border-progressBg"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full bg-white border-gray-300 border-2 outline-none rounded-md px-4 py-[6px] focus:border-progressBg"
          />
        </div>

        {/* Zip and Country */}
        <div className="flex justify-between items-center gap-10 mb-4">
          <input
            type="text"
            placeholder="Zip Code"
            className="w-full bg-white border-gray-300 border-2 outline-none rounded-md px-4 py-[6px] focus:border-progressBg"
          />
          <div className="w-full bg-white border-gray-300 border-2 px-4 py-[6px] rounded-md relative">
            <span className="text-xs bg-white text-gray-400 px-1 absolute top-[-10px] left-3">
              Country
            </span>
            <select className="w-full bg-transparent outline-none text-gray-400">
              <option value="usa">United State</option>
              <option value="India">India</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="canada">Canada</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div className="flex justify-between items-center gap-10 mb-4">
          <input
            type="text"
            placeholder="Address 1"
            className="w-full bg-white border-gray-300 border-2 outline-none rounded-md px-4 py-[6px] focus:border-progressBg"
          />
          <input
            type="text"
            placeholder="Address 2"
            className="w-full bg-white border-gray-300 border-2 outline-none rounded-md px-4 py-[6px] focus:border-progressBg"
          />
        </div>
      </form>
    </div>
  );
}
