import psale2 from "../assets/product2.png";
import GridItems from "./GridItems";
import { useGetProductsQuery } from "../features/apiSlice";
export default function TopSales() {
  const { data: products, loading, error } = useGetProductsQuery();
  return (
    <>
      <div className="nike-container">
        <div className="grid items-center">
          <h1
            className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
         drop-shadow-lg"
          >
            Shop
          </h1>
        </div>
        <div className="grid items-center justify-items-center gap-7 lg:gap-5 mt-7 grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {!products ? (
            ""
          ) : (
            <>
              {products?.map((item, i) => (
                <GridItems {...item} key={i} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
