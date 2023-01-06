import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'
import CategoryRow from './CategoryRow';
import { fetchCategories } from '../stores/actions/category';
export default function CategoryTable() {
  const categories = useSelector((state) => state.categoryReducer.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  })

    return (
        <>
        <section class="py-1 bg-blueGray-50">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    Categories
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to="/new-category">
                    <button 
                      class="bg-blue-400 text-white hover:text-yellow-200 active:bg-blue-500 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Category Name
                    </th>
               
                  </tr>
                </thead>

                <tbody>
                  {categories.map((category, i) => {
                    return <CategoryRow category={category} i={i} key={category.id} />
                  }) }
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}