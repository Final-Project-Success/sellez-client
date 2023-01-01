import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrums";
import profilePict from "../public/products/product1.jpg";
import { FaAddressCard } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
export default function AccountPage() {
  return (
    <>
      <BreadCrumbs page="My Account" />

      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* sidebar */}
        <div className="col-span-3">
          {/* account profile */}
          <div className="px-4 py-3 shadow flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src={profilePict}
                alt="profile"
                className="rounded-full w-14 h-14 border-gray-200 p-1 object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-600">Hello,</p>
              <h4 className="text-gray-800 font-medium">Fian Febry</h4>
            </div>
          </div>
          {/* account p end */}
          {/* profile links */}
          <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            {/* single link */}
            <div className="space-y-1 pl-8 mt-1">
              <div className="relative text-primary block font-medium capitalized">
                <span className="absolute -left-8 top-1 text-base">
                  <FaAddressCard />
                </span>
                Manage Account
              </div>
              <div className="relative hover:text-primary block font-medium capitalized cursor-pointer transition">
                Profile Info
              </div>
            </div>
            {/* single link end */}
            <div className="space-y-1 pl-8 mt-1">
              <div className="relative  block font-medium capitalized mt-2">
                <span className="absolute -left-8 top-1 text-base">
                  <AiOutlineHeart />
                </span>
                My Favorites
              </div>
            </div>
            <div className="space-y-1 pl-8 mt-1">
              <div className="relative  block font-medium capitalized mt-2">
                <span className="absolute -left-8 top-1 text-base">
                  <IoMdExit />
                </span>
                Logout
              </div>
            </div>
          </div>
          {/* profile links ends */}
        </div>
        {/* sidebar end */}
        {/* grid kanan */}
        <Outlet />
        {/* grind kanan */}
      </div>
    </>
  );
}
