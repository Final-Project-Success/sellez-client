import foto from "../assets/sellez-logoo.jpg";
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NewProductForm() {
  return (
    <>
      <div style={{ marginTop: 10, marginLeft: 50 }}>
        <Link
          to="/"
          className="text-blue-500 text-sm font-bold hover:text-yellow-400 mr-10 ease-linear transition-all duration-200"
        >
          <FontAwesomeIcon icon={faX} size="2xl" />
        </Link>
      </div>

      <div class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div class="flex flex-col justify-between">
          <img
            src={foto}
            alt=""
            style={{ width: 500, marginTop: 120, paddingRight: 50 }}
          />
        </div>
        <form novalidate="" class="space-y-6 ng-untouched ng-pristine ng-valid">
          <div>
            <label for="name" class="text-sm">
              Product Name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              class="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label for="price" class="text-sm">
              Price
            </label>
            <input
              id="price"
              type="number"
              class="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label for="stock" class="text-sm">
              Stock Available
            </label>
            <input
              id="stock"
              type="number"
              class="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label for="message" class="text-sm">
              Description
            </label>
            <textarea
              id="message"
              rows="3"
              class="w-full p-3 rounded dark:bg-gray-800"
            ></textarea>
          </div>

          <div className="grid grid-cols-2">
            <label
              class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              Image 1
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />

            <label
              class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              Image 2
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />

            <label
              class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              Image 3
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />

            <label
              class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              Image 4
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />
          </div>

          <button
            type="submit"
            class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-500 text-white"
          >
            Post
            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 6 }} />
          </button>
        </form>
      </div>
    </>
  );
}
