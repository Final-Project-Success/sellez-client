import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
// icons
import { FiArrowLeft, FiPhoneCall } from "react-icons/fi";
import { BiMicrophone } from "react-icons/bi";
import { CiPaperplane } from "react-icons/ci";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function Chat({ socket, username, room, toggle }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        user: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((message) => [...message, messageData]);
      // === for clear chat box ===
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_msgprivate", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="h-full w-full flex flex-col justify-between">
      {/* chat top */}
      <div>
        <div className="flex items-center justify-between px-3 text-white w-full shadow-inner bg-[#263238] py-2 rounded-xl">
          <h2>Chat</h2>

          <button className="bg-white p-2 rounded-full" onClick={toggle}>
            <HiOutlineChevronDoubleDown className="text-black" />
          </button>
        </div>

        <div className="w-full flex items-start justify-around px-3 pt-2 z-50 bg-white">
          <div className="shadow-lg p-2 rounded-full cursor-pointer">
            <FiArrowLeft />
          </div>
          <div>
            <div className="relative h-12 w-12 grid place-items-center mx-auto bg-[#116cfc] rounded-full shadow-lg">
              <h1 className="text-3xl capitalize text-white">{username}</h1>
              <span className="absolute w-3 h-3 block right-[1px] bottom-1 rounded-full bg-green-500 shadow-lg"></span>
            </div>
            <h3 className="capitalize text-center">{username}</h3>
          </div>

          <div className="shadow-lg p-2 rounded-full cursor-pointer">
            <FiPhoneCall />
          </div>
        </div>
      </div>

      <div className="w-full">
        <ScrollToBottom>
          {messageList.map((el) => {
            return (
              <div
                className={`my-2 mx-3 ${
                  username === el.user ? "text-right" : "text-left"
                }`}
              >
                <div
                  key={el.id}
                  className={`text-white ${
                    username === el.user
                      ? "bg-[#116cfc] ml-5 py-1 px-2 rounded-full rounded-br-none"
                      : "bg-[#845EC2] mr-5 py-1 pl-2 rounded-full rounded-bl-none"
                  }`}
                >
                  <p>{el.message}</p>
                </div>

                <p className="text-xs">{el.time}</p>
              </div>
            );
          })}
        </ScrollToBottom>

        {/* chat bottom */}
        <div className="relative w-full flex items-center bg-[#116cfc] text-white rounded-xl py-3 z-50">
          <BiMicrophone className="text-2xl mx-2 cursor-pointer" />
          <input
            className="w-full box-border bg-transparent placeholder-white focus:outline-none"
            type="text"
            placeholder="Message..."
            value={currentMessage}
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMessage();
            }}
          />

          <button
            onClick={sendMessage}
            className="shadow-xl p-2 mr-2 rounded-full bg-white cursor-pointer"
          >
            <CiPaperplane className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
