import { facebookProvider } from "../../config/auth-sosmed";
import { googleProvider } from "../../config/auth-sosmed";
import socialMediaAuth from "../../sevices/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/sellez-logoo.jpg";
import { Link } from "react-router-dom";
import {
  useLoginMutation,
  useOauthLoginMutation,
} from "../../features/apiUser";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [oauth] = useOauthLoginMutation();
  const [alertMessage, setAlertMessage] = useState("");
  const [oauthInput, setOauthInput] = useState({
    username: "",
    email: "",
    profilePict: "",
  });

  const handleLogin = async (provider) => {
    const res = await socialMediaAuth(provider);

    setOauthInput({
      username: res.displayName,
      email: res.email,
      profilePict: res.photoURL,
    });
  };

  useEffect(() => {
    oauth(oauthInput).then((result) => {
      localStorage.setItem("access_token", result.data.access_token);
      localStorage.setItem("role", result.data.role);
      localStorage.setItem("email", result.data.email);
      localStorage.setItem("username", result.data.username);
      navigate("/");
      setInput({
        username: "",
        email: "",
        profilePict: "",
      });
    });
  }, [oauthInput, oauth, navigate]);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(input).then((result) => {
      if (result.data) {
        localStorage.setItem("email", result.data.email);
        localStorage.setItem("access_token", result.data.access_token);
        localStorage.setItem("role", result.data.role);
        localStorage.setItem("username", result.data.username);
        navigate("/");
        setInput({
          email: "",
          password: "",
        });
      }
      if (result.error) {
        setAlertMessage(result.error.data.msg);
      }
    });
  };

  return (
    <>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src={logo} style={{ width: 700 }} alt="Product" />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit}>
                <div class="flex flex-row items-center justify-center lg:justify-start">
                  <p class="text-lg mb-0 mr-4">Sign in with</p>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={() => handleLogin(facebookProvider)}
                    class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      class="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={() => handleLogin(googleProvider)}
                    class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-google"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <path
                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                        id="mainIconPathAttribute"
                        fill="#ffffff"
                      ></path>{" "}
                    </svg>
                  </button>
                </div>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    value={input.email}
                    name="email"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={input.password}
                    name="password"
                  />
                </div>

                <div class="text-center lg:text-left">
                  <button
                    type="submit"
                    class="inline-block px-7 py-3 bg-yellow-300 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out"
                  >
                    Login
                  </button>
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link
                      to={"/register"}
                      class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register
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
