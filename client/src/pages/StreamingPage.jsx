import {
  AiOutlinePlayCircle,
  AiOutlineShoppingCart,
  AiFillSetting,
} from "react-icons/ai";
import io from "socket.io-client";
import { BsPeople } from "react-icons/bs";
import { CgProfile, CgShapeCircle } from "react-icons/cg";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useState, useEffect } from "react";
import ShopLive from "../components/ShopLive/ShopLive";
import AgoraUIKit from "agora-react-uikit";
import ScrollToBottom from "react-scroll-to-bottom";
import { useChatsQuery } from "../features/apiChat";
const video =
  "https://file-examples.com/storage/feefe3d0dd63b5a899e4775/2017/04/file_example_MP4_480_1_5MG.mp4";
const socket = io.connect("http://localhost:3001");
export default function StreamingPage() {
  const { data, error, isLoading } = useChatsQuery();
  console.log(data, `<<<< data message useChattquery`);
  const [show, setShow] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const toggle = () => {
    setShow(!show);
  };

  // for message
  const sendMessage = async () => {
    console.log(`send mesage`);
    if (currentMessage !== "") {
      const messageData = {
        user: "ayam",
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      // === for clear chat box ===
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((message) => [...message, data]);
    });
  }, [socket]);

  const [videoCall, setVideoCall] = useState(false);
  const rtcProps = {
    appId: "8f469a0aac0144a4a17b2dc003d51e43",
    channel: "channel", // your agora channel,
    role: localStorage.role === "admin" ? "host" : "audience",
    token:
      "007eJxTYHisNmVFoX9NuGXzEXkPN+tDz79YPvu4gGN7Te/ucLk8/VsKDBZpJmaWiQaJickGhiYmiSaJhuZJRinJBgbGKaaGqSbGO+p2JzcEMjKslFzGysgAgSA+O0NyRmJeXmoOAwMA0tEhKA==", // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return (
    <>
      <section className="bg-hero-bg bg-no-repeat bg-cover h-full w-auto pb-24">
        <div className="flex items-start h-full gap-3 pt-24 md:pl-20">
          <div className="shadow-xl w-3/4">
            <div className="relative">
              <div height="600" className="relative w-full">
                {videoCall && (
                  <div
                    style={{ display: "flex", width: "100vw", height: "97vh" }}
                  >
                    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
                  </div>
                )}
              </div>
              <span className="text-red-500 font-bold text-xl uppercase absolute top-2 right-3 z-20">
                Live
              </span>
            </div>

            <div className="flex justify-around gap-4 py-3">
              {localStorage.role === "admin" ? (
                <button
                  className="py-2 px-3 text-white text-lg font-semibold bg-[#5c17c5] flex items-center border border-[#5c17c5] hover:bg-transparent hover:text-black transition-all duration-75 ease-in-out"
                  onClick={() => setVideoCall(true)}
                >
                  <AiOutlinePlayCircle className="mr-2 text-2xl" /> Start Stream
                </button>
              ) : (
                <button
                  className="py-2 px-3 text-white text-lg font-semibold bg-[#5c17c5] flex items-center border border-[#5c17c5] hover:bg-transparent hover:text-black transition-all duration-75 ease-in-out"
                  onClick={() => setVideoCall(true)}
                >
                  <AiOutlinePlayCircle className="mr-2 text-2xl" /> Join Stream
                </button>
              )}

              <button
                onClick={toggle}
                className="py-2 px-3 text-white text-lg font-semibold bg-[#5c17c5] flex items-center border border-[#5c17c5] hover:bg-transparent hover:text-black transition-all duration-75 ease-in-out"
              >
                <AiOutlineShoppingCart className="mr-2 text-2xl" /> Shop Now
              </button>
            </div>
          </div>

          {/* chat box */}

          <div className="h-[700px] w-[25%] bg-[#18181b] shadow-xl relative text-white border rounded-sm">
            <div className="flex justify-between py-3 px-4 border-b border-gray-300 shadow-md">
              <h2 className="text-lg font-medium">Stream Chat</h2>

              <BsPeople className="text-xl" />
            </div>
            <ScrollToBottom className="h-[500px]">
              {data?.map((el) => {
                return (
                  <div className="flex items-center" key={el.id}>
                    <h3 className="text-xl font-medium text-[#5c17c5] -mt-1">
                      {el.user}:
                    </h3>
                    <span className="ml-2 font-normal text-white">
                      {el.message}
                    </span>
                  </div>
                );
              })}
            </ScrollToBottom>
            <div className="absolute bottom-0 w-full">
              {/* <div className="flex flex-col gap-2 my-3 px-3">
                <CgProfile className="mr-2 text-2xl" />
              </div> */}

              <div className="relative px-3">
                <input
                  className="py-2 pl-3 bg-[#3d3d40] placeholder-white w-full rounded-md"
                  type="text"
                  value={currentMessage}
                  placeholder="Send a Message"
                  onChange={(e) => {
                    setCurrentMessage(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    e.key === "Enter" && sendMessage();
                  }}
                />
                <HiOutlineEmojiHappy className="absolute top-[10px] right-5 text-xl" />
              </div>

              <div className="flex items-center justify-between px-3 py-4">
                <div className="flex items-center gap-3">
                  <CgShapeCircle className="text-2xl ml-2 text-[#5c17c5]" />
                  <span className="font-medium">0</span>
                </div>
                <div className="flex items-center gap-3">
                  <AiFillSetting className="text-xl" />
                  <button
                    onClick={sendMessage}
                    className="py-1 px-3 text-white font-medium rounded-md bg-[#5c17c5]"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ShopLive drawer={show} toggle={toggle} />
    </>
  );
}
