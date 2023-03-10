import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";

import { useGetProductByIdQuery } from "../../features/apiSlice";

import { useParams } from "react-router-dom";
export default function DetailPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  return (
    <div className="detailspage min-h-screen flex justify-center items-center">
      {/* Importing Components */}

      {/* Container Start */}
      <div
        className="w-[90%] mx-auto flex justify-between p-16  rounded-xl shadow-lg"
        // style={{
        //   background: "rgba(255, 255, 255, 0.34)",
        //   borderRadius: "20px",
        //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        //   backdropFilter: "blur(6.8px)",
        //   border: "1px solid rgba(255, 255, 255, 0.3)",
        // }}
      >
        {/* Left Side */}
        <LeftSide />
        {/* Middle */}
        <MiddleSide />
        {/* Right */}
        <RightSide data={data} />
      </div>
      {/* Container End */}
    </div>
  );
}
