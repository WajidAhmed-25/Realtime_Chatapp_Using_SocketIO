// import React, { useEffect, useState } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";

// function Chat({ socket, username, room }) {
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);

//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData = {
//         room: room,
//         author: username,
//         message: currentMessage,
//         time:
//           new Date(Date.now()).getHours() +
//           ":" +
//           new Date(Date.now()).getMinutes(),
//       };

//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//       setCurrentMessage("");
//     }
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>
//       <div className="chat-body">
//         <ScrollToBottom className="message-container">
//           {messageList.map((messageContent) => {
//             return (
//               <div
//                 className="message"
//                 id={username === messageContent.author ? "you" : "other"}
//               >
//                 <div>
//                   <div className="message-content">
//                     <p>{messageContent.message}</p>
//                   </div>
//                   <div className="message-meta">
//                     <p id="time">{messageContent.time}</p>
//                     <p id="author">{messageContent.author}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </ScrollToBottom>
//       </div>
//       <div className="chat-footer">
//         <input
//           type="text"
//           value={currentMessage}
//           placeholder="Hey..."
//           onChange={(event) => {
//             setCurrentMessage(event.target.value);
//           }}
//           onKeyPress={(event) => {
//             event.key === "Enter" && sendMessage();
//           }}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;


















// Attachment Code //


// import React, { useEffect, useState } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";

// function Chat({ socket, username, room }) {
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [file, setFile] = useState(null);
//   const [messageList, setMessageList] = useState([]);

//   const sendMessage = async () => {
//     if (currentMessage !== "" || file) {
//       const messageData = {
//         room: room,
//         author: username,
//         message: currentMessage,
//         file: file ? URL.createObjectURL(file) : null, // Sending file as URL for display
//         time: new Date().toLocaleTimeString(), // Using locale time string for time
//       };

//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//       setCurrentMessage("");
//       setFile(null);
//     }
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>
//       <div className="chat-body">
//         <ScrollToBottom className="message-container">
//           {messageList.map((messageContent, index) => (
//             <div
//               className="message"
//               key={index}
//               id={username === messageContent.author ? "you" : "other"}
//             >
//               <div>
//                 <div className="message-content">
//                   {messageContent.message && <p>{messageContent.message}</p>}
//                   {messageContent.file && (
//                     <a
//                       href={messageContent.file}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Attachment
//                     </a>
//                   )}
//                 </div>
//                 <div className="message-meta">
//                   <p id="time">{messageContent.time}</p>
//                   <p id="author">{messageContent.author}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </ScrollToBottom>
//       </div>
//       <div className="chat-footer">
//         <input type="file" onChange={handleFileChange} />
//         <input
//           type="text"
//           value={currentMessage}
//           placeholder="Hey..."
//           onChange={(event) => setCurrentMessage(event.target.value)}
//           onKeyPress={(event) => {
//             event.key === "Enter" && sendMessage();
//           }}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;



// ---------------------------------------------- R E A L  F I L E  N A M E --------------------------------//


import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [file, setFile] = useState(null);
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "" || file) {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        file: file ? URL.createObjectURL(file) : null,
        fileName: file ? file.name : null, 
        time: new Date().toLocaleTimeString(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
      setFile(null);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window ">
      <div className="chat-header ">
        <p  className="text-center  font-bold tracking-wider">Live Chat</p>
      </div>
      <div className="chat-body ">
        <ScrollToBottom className="message-container  bg-gray-100">
          {messageList.map((messageContent, index) => (
            <div
              className="message "
              key={index}
              id={username === messageContent.author ? "you" : "other"}
            >
              <div className=" pl-2 w-24">
                <div className="message-content ">
                  {messageContent.message && <p>{messageContent.message}</p>}
                  {messageContent.file && (
                    <a
                      href={messageContent.file}
                      target="_blank"
                      rel="noopener noreferrer"
  
                    >
                      {messageContent.fileName} {/* Display file name */}
                    </a>
                  )}
                </div>
                <div className="message-meta flex flex-row space-x-8">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input type="file"  className="jojo" onChange={handleFileChange} />
        <input
          type="text"
          value={currentMessage}
          placeholder="Enter Message here ..."
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;


