import "./style.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "../../components/chat/chat";
import chatImage from "../../assets/chat.png";
const socket = io.connect("http://localhost:3001");
export default function ChatPage() {
  const [username, setUsername] = useState(localStorage.username);
  const [room, setRoom] = useState("");
  const [listUser, setListUser] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [openChat, setOpenChat] = useState(true);

  const joinRoom = () => {
    console.log("ke klik");
    setRoom({
      room: `room-${localStorage.email}`,
    });
    setOpenChat(!openChat);
  };

  useEffect(() => {
    console.log(room, "+_%+_+_+_+_");
    socket.emit("join_room", room.room);
  }, [room]);

  useEffect(() => {
    socket.on("listUser", (users) => {
      setListUser([...users]);
      console.log(users);
    });
  }, []);

  useEffect(() => {
    socket.emit("conversation", { role: localStorage.role });
  }, [openChat]);

  useEffect(() => {
    socket.on("loadChat", (data) => {
      console.log(data, `<<<<<< data onload`);
      // setMessa(() => [...data]);
    });
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-[9999]">
      <div
        className={`h-[450px] w-72 bg-white shadow-xl rounded-xl relative grid place-items-center ${
          openChat ? "scale-x-0 scale-y-0" : "scale-x-1 scale-y-1"
        } transition-all duration-300 ease-in-out origin-bottom-right`}
      >
        <div
          className={`w-24 h-full absolute top-0 bg-white pt-3 px-2 text-center border rounded-md shadow-xl transition-all duration-300 delay-300 ease-in-out ${
            openChat ? "opacity-0 -left-52" : "opacity-1 -left-[96px]"
          } ${localStorage.role !== "Admin" ? "hidden" : "block"}`}
        >
          <h2 className="text-xl font-medium mb-8 border px-2">Sellez</h2>
          {listUser.length ? (
            listUser.map((el) => {
              return (
                <div
                  className="mb-5"
                  onClick={() =>
                    setRoom({
                      room: `room-${el.email}`,
                    })
                  }
                >
                  <div className="w-14 mx-auto">
                    <img
                      className="rounded-full shadow-xl"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="chat icon"
                    />
                  </div>
                  <p>{el.username}</p>
                </div>
              );
            })
          ) : (
            <h3>"no contacts"</h3>
          )}
        </div>
        <Chat
          toggle={() => setOpenChat(!openChat)}
          socket={socket}
          username={username}
          room={room}
        />
      </div>

      <div
        onClick={
          localStorage.role !== "Admin"
            ? joinRoom
            : () => setOpenChat(!openChat)
        }
        className="w-20 rounded-full ml-auto mt-5 shadow-xl"
      >
        <img
          className="rounded-full shadow-xl"
          src={chatImage}
          alt="chat icon"
        />
      </div>
    </div>
  );
}
