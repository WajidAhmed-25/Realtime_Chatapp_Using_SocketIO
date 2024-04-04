import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import './chat.css'
import axios from "axios"; 

const socket = io.connect("http://localhost:3001");

export default function My_ChatWindow(){


    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      }
    };

    const my_method= async () => {
     
    handle_Submittion()
    joinRoom()

    }


    const handle_Submittion = async () => {
      // event.preventDefault(); 
    
     if (username.length === null && room === null) {
      alert("Wrong Credentials Entered");
    }
    else{
      try {
    
          const response = await axios.post("http://localhost:3001/api/user/room_data", {
          username,
          room,
          });
    
          console.log(response.data); 
          
      } catch (error) {
          console.error("Error Entering User:", error);
      }
    }
    };
    

    return(

          <div className="Application w-full  h-screen  flex justify-center  pt-24">
      {!showChat ? (
        <div className="border-4 border-black/30  w-2/5 h-4/5 p-40 rounded-lg  ">
          <h3 className="tracking-wider text-4xl text-center font-bold ">Join A Chat</h3>
       <div className="flex flex-col space-y-8 mt-12 "> 
          <input
            type="text"
            className="bg-gray-100 p-4 rounded-md border-2 border-gray-300  joint_ w-full text-black font-semibold outline-none"
            placeholder="Enter Username here..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            className="bg-gray-100 w-full p-4 rounded-md border-2 border-gray-300  joint_  text-black font-semibold outline-none"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
         
          <button onClick={my_method} className="bg-green-300 hover:bg-black hover:text-white w-48 p-4 rounded-lg border-2 border-black/30 font-bold text-lg ml-auto mr-auto">Join A Room</button>
          </div>
        
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>


    )  
}