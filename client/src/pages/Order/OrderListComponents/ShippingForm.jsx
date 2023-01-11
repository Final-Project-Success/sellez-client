import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetCityRajaOngkirQuery } from "../../../features/apiSlice";
import { useGetCostRajaOngkirMutation } from "../../../features/apiSlice";
export default function ShippingForm() {
  const [getCostRajaOngkir] = useGetCostRajaOngkirMutation();
  const { data, isLoading, isError } = useGetCityRajaOngkirQuery();
  const [input, setInput] = useState({
    destination: 0,
    courier: "",
  });
  const navigate = useNavigate();

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
    getCostRajaOngkir(input).then((result) => {
      if (result.data.rajaongkir.results[0].costs[0].cost[0].value) {
        setInput({
          destination: 0,
          courier: "",
        });
        console.log(result.data.rajaongkir.results[0].costs[0].cost[0].value);
        navigate("/orders");
      }

      // if (result.error) {
      // setAlertMessage(result.error.data.msg);
      // }
    });
  };

  return (
    <div className="w-8/12 bg-white p-6 shadow-lg rounded-xl">
      <div className="mb-4">
        <h2 className="text-textBlack text-xl font-semibold"></h2>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Heading */}
        {/* Name and Email */}
        <div className="flex justify-between items-center gap-10 mb-4">
          <input
            type="text"
            placeholder="Full Name"
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
        </div>

        {/* Zip and Country */}
        <div className="flex justify-between items-center gap-10 mb-4">
          <div className="w-full bg-white border-gray-300 border-2 px-4 py-[6px] rounded-md relative">
            <span className="text-xs bg-white text-gray-400 px-1 absolute top-[-10px] left-3">
              Destination
            </span>
            <select
              name="destination"
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-400"
            >
              {data?.rajaongkir.results.map((el) => {
                return (
                  <option value={el.city_id} key={el.city_id}>
                    {el.city_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-full bg-white border-gray-300 border-2 px-4 py-[6px] rounded-md relative">
            <span className="text-xs bg-white text-gray-400 px-1 absolute top-[-10px] left-3">
              Courier
            </span>
            <select
              name="courier"
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-400"
            >
              <option value="tiki">TIKI</option>
              <option value="jne">JNE</option>
              <option value="pos">POS</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div className="flex justify-between items-center gap-10 mb-4">
          <input
            type="text"
            placeholder="Address"
            className="w-full bg-white border-gray-300 border-2 outline-none rounded-md px-4 py-[6px] focus:border-progressBg"
          />
        </div>
        <div className="flex justify-between items-center gap-10 mb-4">
          <Link to={"/"}>
            <button className="w-full bg-[#F8F9FD] text-progressBg font-semibold py-2 rounded-md">
              Back to Cart
            </button>
          </Link>
          <button
            type="submit"
            className="w-full bg-progressBg text-white font-semibold py-2 rounded-md"
          >
            Procced to Payment
          </button>
        </div>
      </form>
    </div>
  );
}
