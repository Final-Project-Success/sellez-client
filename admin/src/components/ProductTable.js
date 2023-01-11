import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ProductRow from "./ProductRow";
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from "../stores/actions/product";
import Loading from "./Loading";
export default function Table() {
  const products = useSelector((state) => state.productReducer.products)
  const loading = useSelector((state) => state.loadingReducer.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  })
  if(loading) {
    return (
      <Loading />
    )
  }
  return (
    <>
     
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                   Our Products
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to="/new-product">
                    <button
                      className="bg-blue-400 text-white hover:text-yellow-200 active:bg-blue-500 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      {" "}
                      Post New 
              <FontAwesomeIcon icon={faPlus} style={{marginLeft: 5}} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Product Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Price
                    </th>
                
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Image
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Stock
                    </th>
                  </tr>
                </thead>

                <tbody>
                 {products.map((product, i) => {
                  return  <ProductRow product={product} i={i} key={product.id} />
                 })}
                   
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
