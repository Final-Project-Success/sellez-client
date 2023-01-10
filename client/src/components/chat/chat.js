import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Chat({ socket, username}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [room, setRoom] = useState("");

  const roomjoin = () =>{
    setRoom({
      ...room,
      room: `room-${localStorage.email}`
  })
    socket.emit("join_room")
  }

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        // room: room,
        user: localStorage.username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_msgprivate", messageData);
      setMessageList((list) => [...list, messageData]);
      // for clear
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_msgprivate", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((el) => {
            return (
              <div
                className="message"
                id={username === el.user ? "you" : "other"}
              >
                <div>
                <p id="author">{el.user}</p>
                  <div className="message-content">
                    <p>{el.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{el.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>send</button>
      </div>
    </div>
  );
}
