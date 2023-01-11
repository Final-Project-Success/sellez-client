import logo from "./../assets/sellez-logoo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/apiUser";
import { useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    profilePict: "",
    role: "customer",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  };

  const handleChangeFile = (e) => {
    console.log(e.target.files[0]);
    setInput({
      ...input,
      profilePict: [input.profilePict, e.target.files[0]],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register(input).then((result) => {
      if (result.data) {
        navigate("/login");
        setInput({
          username: "",
          email: "",
          password: "",
          address: "",
          profilePict: "",
          role: "customer",
          phoneNumber: "",
        });
      }
    });
  };
  return (
    <>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src={logo} style={{ width: 700 }} alt="logo" />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <p class="text-lg mb-10 mr-4 font-bold">Create new account!</p>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="username"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                    value={input.username}
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    placeholder="Email address"
                    name="email"
                    onChange={handleChange}
                    value={input.email}
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={input.password}
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="address"
                    placeholder=" address"
                    name="address"
                    onChange={handleChange}
                    value={input.address}
                  />
                </div>

                <label
                  class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  Profile Picture
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  onChange={handleChangeFile}
                  enctype
                />

                <div class="mb-6 mt-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="phone number"
                    placeholder=" phone number"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={input.phoneNumber}
                  />
                </div>

                <div class="flex justify-between items-center mb-6">
                  <a href="#!" class="text-gray-800">
                    Forgot password?
                  </a>
                </div>

                <div class="text-center lg:text-left">
                  <button
                    type="submit"
                    class="inline-block px-7 py-3 bg-yellow-300 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out"
                  >
                    Sign Up
                  </button>
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already Have Account?
                    <Link
                      to={"/login"}
                      class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Sign in!
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
