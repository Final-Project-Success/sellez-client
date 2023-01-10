import foto from "../assets/sellez-logoo.jpg";
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createProduct } from "../stores/actions/product";
import Swal from "sweetalert2";

export default function NewProductForm() {
  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    color: "",
    CategoryId: 0
  });

  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInput({
      ...input,
      [name]: value,
    });
  };



  const handleChangeFile = (e) => {
  
    setImage({
      image: e.target.files,
    });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(input, image));
  
    Swal.fire("Good job!", `${input.name} successfully added`, "success");

    navigate("/");
  };

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

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <img
            src={foto}
            alt="logo"
            style={{ width: 500, marginTop: 120, paddingRight: 50 }}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label htmlFor="name" className="text-sm font-bold">
              Product Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="name"
              onChange={handleChange}
              value={input.name}
              name="name"
              className="w-full  p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="price" className="text-sm font-bold">
              Price
            </label>
            <input
              id="price"
              type="number"
              placeholder="price"
              onChange={handleChange}
              value={input.price}
              name="price"
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="stock" className="text-sm font-bold">
              Stock Available
            </label>
            <input
              id="stock"
              type="number"
              onChange={handleChange}
              value={input.stock}
              placeholder="Stock"
              name="stock"
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-bold">
              Description
            </label>
            <textarea
              id="message"
              rows="3"
              onChange={handleChange}
              placeholder="description"
              value={input.description}
              name="description"
              className="w-full p-3 rounded dark:bg-gray-800"
            ></textarea>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-bold">
              Color
            </label>
            <textarea
              id="message"
              rows="3"
              onChange={handleChange}
              value={input.color}
              name="color"
              className="w-full p-3 rounded dark:bg-gray-800"
            ></textarea>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-bold">
              CategoryId
            </label>
            <textarea
              id="message"
              rows="3"
              onChange={handleChange}
              value={input.CategoryId}
              name="CategoryId"
              className="w-full p-3 rounded dark:bg-gray-800"
            ></textarea>
          </div>

          <div className="">
            <label
              className="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Images
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              name="imgUrl"
              type="file"
              onChange={handleChangeFile}
              multiple
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-500 text-white"
          >
            Post
            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 6 }} />
          </button>
        </form>
      </div>
    </>
  );
}
