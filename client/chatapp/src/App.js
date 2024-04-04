import "./App.css";
import My_ChatWindow from "./chatwindow";
import MyForm from "./encrypt_decrypt";
// import io from "socket.io-client";
// import { useState } from "react";
// import Chat from "./Chat";
import My_login from "./login";
import My_registration from "./register";
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";

 


// const socket = io.connect("http://localhost:3001");

function App() {
  // const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("");
  // const [showChat, setShowChat] = useState(false);

  // const joinRoom = () => {
  //   if (username !== "" && room !== "") {
  //     socket.emit("join_room", room);
  //     setShowChat(true);
  //   }
  // };

    // <div className="App">
    //   {!showChat ? (
    //     <div className="joinChatContainer">
    //       <h3>Join A Chat</h3>
    //       <input
    //         type="text"
    //         placeholder="John..."
    //         onChange={(event) => {
    //           setUsername(event.target.value);
    //         }}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Room ID..."
    //         onChange={(event) => {
    //           setRoom(event.target.value);
    //         }}
    //       />
    //       <button onClick={joinRoom}>Join A Room</button>
    //     </div>
    //   ) : (
    //     <Chat socket={socket} username={username} room={room} />
    //   )}
    // </div>


    /// --------------------- Login Form ---------------------------------//
   
    return (
//  <My_login/> 
//  <My_registration/> 
//  <MyForm/>
//  <My_ChatWindow/>  

//<Route path="/login" component={My_login} exact />
// <Route path="/" component={My_registration} exact />
// <Route path="/chat_window" component={My_ChatWindow} exact />


 <div className="my_home"> 

  {/* <My_ChatWindow/>   */}

</div>

            
        );
    }




export default App;
