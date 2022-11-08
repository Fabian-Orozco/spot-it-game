import React, {useEffect} from 'react';
import io from "socket.io-client";


export default function Client() {
  const socket = io.connect("http://localhost:3001");
  
  const sendMessage = () => {
    socket.emit("send_message", {message: "hello"});
  }

  useEffect(() => {
    socket.on("received_message", (data) => {
      alert(data.message);
    })
    socket.on("hello_world", (data) => {
      alert(data.message);
    })
  }, [socket])

  return (
    <div>
      Client
      <button onClick={sendMessage}> Un boton</button>
    </div>
  )
}
