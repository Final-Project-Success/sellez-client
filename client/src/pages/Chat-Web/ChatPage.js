import "./style.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "../../components/chat/chat";
const socket = io.connect("http://localhost:3001");
export default function ChatPage() {
  const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "") {
      // socket.emit("join_room", room);
      // for show the chat
      setShowChat(true);
    }
  };
  return (
    <div className="Home-chat">
      {!showChat ? (
        <div className="joinChatContainer">
          <input
            type="text"
            placeholder="Type Name Here .."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {/* <input
            type="text"
            placeholder="Room ID"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          /> */}
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username}/>
      )}
    </div>
  );
}
