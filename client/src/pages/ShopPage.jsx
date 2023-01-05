import CardOne from "../components/CardOne";
import BreadCrumbs from "../components/BreadCrums";
export default function ShopPage() {
  // how to get routes?
  return (
    <>
      {/* bread crums */}
      <BreadCrumbs page="Shop" />
      {/* shop wrapper */}
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start ">
        {/* sidebar */}
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            {/* category filter */}
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                categories
              </h3>
              <div className="space-y-2">
                {/* singe category */}
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 ">
                    Bedroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                {/* end single category */}
                {/* singe category */}
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 ">
                    Chair
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(5)</div>
                </div>
                {/* end single category */}
                {/* singe category */}
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 ">
                    Table
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(25)</div>
                </div>
                {/* end single category */}
                {/* singe category */}
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 ">
                    Sofa
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(35)</div>
                </div>
                {/* end single category */}
              </div>
            </div>
            {/* category filter end */}
            {/* Brands filter */}
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium mt-2">
                Brands
              </h3>
              <div className="space-y-2">
                {/* singe category */}
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 ">
                    Dominik
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                {/* end single category */}
                {/* singe category */}
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 ">
                    Karl
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(5)</div>
                </div>
                {/* end single category */}
                {/* singe category */}
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 ">
                    Moving
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(25)</div>
                </div>
                {/* end single category */}
                {/* singe category */}
                <div className="flex items-center">
                  <input type="checkbox" id="cat-1" />
                  <label htmlFor="cat-1" className="text-gray-600 ml-3 ">
                    Ernest
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(35)</div>
                </div>
                {/* end single category */}
              </div>
            </div>
            {/* Brands filter end */}

            {/* price filter */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className="w-full border border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="Min"
                />
                <span className="mx-3text-gray-500 ml-2 mr-2">-</span>
                <input
                  type="text"
                  className="w-full border border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="Max"
                />
              </div>
            </div>
            {/* price filter end */}
            {/* SIze filter */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Size
              </h3>

              <div className="flex items-center gap-2">
                {/* single size selector */}
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xs"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm text-white-600 cursor-pointer bg-primary"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-s"
                  />
                  <label
                    htmlFor="size-s"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm text-white-600 cursor-pointer "
                  >
                    S
                  </label>
                </div>
              </div>
            </div>
            {/* size filter end */}
          </div>
        </div>
        {/* sidebar end */}
        {/* products wrapper */}
        <div className="col-span-3">
          {/* sorting */}
          <select
            name="sorting"
            id="sorting"
            className="w-auto text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
          >
            <option value="1">Default sorting</option>
            <option value="2">Sort by popularity</option>
            <option value="3">Sort by average rating</option>
          </select>
          {/* sorting end */}
          {/* grid products */}
          <div className="grid grid-cols-4 gap-6 mt-4">
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
          </div>
          {/* grid products end */}
        </div>
        {/* products wrapper end */}
      </div>
      {/* shop wrapper end */}
    </>
  );
}
