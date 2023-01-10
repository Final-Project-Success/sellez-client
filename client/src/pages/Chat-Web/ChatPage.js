import "./style.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "../../components/chat/chat";
import chatImage from "../../assets/chat.png";
const socket = io.connect("http://localhost:3001");
const Profile =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
export default function ChatPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  // const [showChat, setShowChat] = useState(false);
  const [openChat, setOpenChat] = useState(true);

  // const joinRoom = () => {
  //   setUsername({
  //     ...username,
  //     username: localStorage.getItem("username"),
  //   });
  //   setRoom({
  //     ...room,
  //     room: `room-${localStorage.email}`,
  //   });
  //   socket.emit("join_room", room);
  //   setOpenChat(!openChat);
  // };
  return (
    <>
      <div
        className={`fixed right-4 bottom-32 z-[9999] h-[450px] w-72 bg-white shadow-xl rounded-xl grid place-items-center ${
          openChat ? "scale-x-0 scale-y-0" : "scale-x-1 scale-y-1"
        } transition-all duration-300 ease-in-out origin-bottom-right`}
      >
        <div
          className={`w-24 h-full absolute top-0 bg-white pt-3 px-2 text-center border rounded-md shadow-xl transition-all duration-300 delay-300 ease-in-out ${
            openChat ? "opacity-0 -left-52" : "opacity-1 -left-[96px]"
          }`}
        >
          <h2 className="text-xl font-medium mb-8 border px-2">Sellez</h2>
          <div className="mb-5">
            <div className="w-14 mx-auto">
              <img
                className="rounded-full shadow-xl"
                src={Profile}
                alt="chat icon"
              />
            </div>
            <p>Admin</p>
          </div>

          <div>
            <div className="w-14  mx-auto">
              <img
                className="rounded-full shadow-xl"
                src={Profile}
                alt="chat icon"
              />
            </div>
            <p>Fiaw</p>
          </div>
        </div>

        <Chat
          toggle={() => setOpenChat(!openChat)}
          socket={socket}
          username={username}
          room={room}
        />
      </div>

      <div
        onClick={() => setOpenChat(!openChat)}
        className="w-20 rounded-full ml-auto mt-5 shadow-xl fixed right-4 bottom-4 z-[9999]"
      >
        <img
          className="rounded-full shadow-xl"
          src={chatImage}
          alt="chat icon"
        />
      </div>
    </>
  );
}
