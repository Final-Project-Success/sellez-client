import { BiSearchAlt } from "react-icons/bi";

export default function ChatPageNew() {
  return (
    <div className="flex mt-20">
      <div className="w-60 h-screen bg-gray-100">
        <div className="text-xl p-3">Chats</div>
        <div className="p-3 flex">
          <input
            type="text"
            className="p-2 rounded-tl-md rounded-bl-md bg-gray-200 w-full focus:outline-none"
            id=""
            placeholder="Search For Users..."
          />
          <div
            className="flex justify-center items-center 
          bg-gray-200 rounded-tr-md rounded-br-md"
          >
            <BiSearchAlt
              className="text-2xl text-black-500 cursor-pointer     
          "
            />
          </div>
        </div>
        <div className="flex flex-col overflow-y-auto">
          {/* chat kanan komponen 1 */}
          <div
            className="flex m-3 bg-white rounded-md p-3 shadow-md
          "
          >
            <div className="w-1/5">
              <img
                src="https://www.w3schools.com/w3images/avatar2.png"
                className="rounded-full"
                alt=""
              />
            </div>
            <div className="flex-grow ml-3">
              <div className="flex text-sm text-Black-500  justify-between">
                <div>Fian</div>
                <div className="text-gray-400">12:00 AM</div>
              </div>
              <div className="text-xs text-gray-400 max-w-100 ">
                Hallo...There want To ask
              </div>
            </div>
          </div>
          <div
            className="flex m-3 bg-white rounded-md p-3 shadow-md
          "
          >
            <div className="w-1/5">
              <img
                src="https://www.w3schools.com/w3images/avatar2.png"
                className="rounded-full"
                alt=""
              />
            </div>
            <div className="flex-grow ml-3">
              <div className="flex text-sm text-Black-500  justify-between">
                <div>Fian</div>
                <div className="text-gray-400">12:00 AM</div>
              </div>
              <div className="text-xs text-gray-400 max-w-100 ">
                Hallo...There want To ask
              </div>
            </div>
          </div>
          {/* end i line */}
        </div>
      </div>
      <div className="flex-grow h-screen bg-blue-100"></div>
    </div>
  );
}
