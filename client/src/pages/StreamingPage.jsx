import { AiOutlinePlayCircle, AiOutlineShoppingCart } from "react-icons/ai";
import io from "socket.io-client";
import { BsPeople } from "react-icons/bs";
import { CgShapeCircle } from "react-icons/cg";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useState, useEffect } from "react";
import ShopLive from "../components/ShopLive/ShopLive";
import AgoraUIKit from "agora-react-uikit";
import ScrollToBottom from "react-scroll-to-bottom";
import { useChatsQuery } from "../features/apiChat";

const socket = io.connect("http://44.203.56.35:3001");
export default function StreamingPage() {
  const { data, error, isLoading } = useChatsQuery();
  const [show, setShow] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    setMessageList(data);
  }, [data]);

  const toggle = () => {
    setShow(!show);
  };

  // for message
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        user: localStorage.username,
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
    socket.on("receive_message", (newMessage) => {
      setMessageList((message) => [...message, newMessage]);
    });
  }, []);

  const [videoCall, setVideoCall] = useState(false);
  const rtcProps = {
    appId: "8f469a0aac014aa4a17b2dc003d51e43",
    channel: "channel", // your agora channel,
    role: localStorage.role === "admin" ? "host" : "audience",
    token:
      "007eJxTYChkMY7V71ikkRN8MkKpd1ONkn7JrW+Br8RmJ+jrcxgISigwWKSZmFkmGiQmJhsYmpgkmiQamicZpSQbGBinmBqmmhibPN6X3BDIyDCp9isTIwMEgvjsDMkZiXl5qTkMDACKvx2M", // use null or skip if using app in testing mode
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
                    // height="600"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "full",
                      height: "600px",
                    }}
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
              {!videoCall && (
                <div>
                  {localStorage.role === "admin" ? (
                    <button
                      className="py-2 px-3 text-white text-lg font-semibold bg-[#5c17c5] flex items-center border border-[#5c17c5] hover:bg-transparent hover:text-black transition-all duration-75 ease-in-out"
                      onClick={() => setVideoCall(true)}
                    >
                      <AiOutlinePlayCircle className="mr-2 text-2xl" /> Start
                      Stream
                    </button>
                  ) : (
                    <button
                      className="py-2 px-3 text-white text-lg font-semibold bg-[#5c17c5] flex items-center border border-[#5c17c5] hover:bg-transparent hover:text-black transition-all duration-75 ease-in-out"
                      onClick={() => setVideoCall(true)}
                    >
                      <AiOutlinePlayCircle className="mr-2 text-2xl" /> Join
                      Stream
                    </button>
                  )}
                </div>
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
              {messageList?.map((el) => {
                return (
                  <div className="flex items-center ml-2" key={el.id}>
                    <h3 className="text-xl font-medium text-[#white] -mt-1">
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
                </div>
                <div className="flex items-center gap-3">
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
