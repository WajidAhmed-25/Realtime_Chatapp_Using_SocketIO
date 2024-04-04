import React, { useState } from 'react';
import bcrypt from 'bcryptjs';


import { Link, useHistory } from "react-router-dom";


const MyForm = () => {
  const history = useHistory();

  const [useremail,setUseremail]=useState("")
  const [password, setPassword] = useState("")
  const [loginClicked, setLoginClicked] = useState(false)
  const [encryptedPassword,setEncryptedPassword] = useState("")
  const [decryptedPassword,setDecryptedPassword] = useState("")

  const show_userlogin = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/user/users")
      .then((response) => response.json())
      .then((data) => {
        const matchedUser = data.find((user) => user.username === useremail);
        if (matchedUser) {
          bcrypt.compare(password, matchedUser.password)
            .then((isMatch) => {
              if (isMatch) {
                console.log("Matched");
                console.log(data)
                const userId = matchedUser._id; 
                console.log("Matched. User ID:", userId);
                history.push("/chat_window");
             
                bcrypt.compare(password, encryptedPassword)
                  .then((isMatch) => {
                    if (isMatch) {
                      bcrypt.hash(password, 10)
                        .then((hashedPassword) => {
                          console.log("Decrypted Password:", hashedPassword);
                          history.push("/chat_window");
                        })
                        .catch((error) => console.error("Error hashing password:", error));
                    } else {
                      console.log("Password is incorrect");
                    }
                  })
                  .catch((error) => console.error("Error comparing passwords:", error));
              } else {
                console.log("Not Matched");
              }
            })
            .catch((error) => console.error("Error comparing passwords:", error));
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };
  
  const handle_Login = async () => {
    try {
      const salt=await bcrypt.genSalt(10);
      const encrypted= await bcrypt.hash(password, salt);
      setEncryptedPassword(encrypted); 

      bcrypt.compare(password, encrypted)
        .then((isMatch) => {
          if (isMatch) {
            setDecryptedPassword(password);
            console.log("Decrypted password: ",decryptedPassword)
            setLoginClicked(true);
          } else {
            console.log("Password is incorrect");
          }
        })
        .catch((error) => console.error("Error comparing passwords:", error));
    } catch(error) {
      console.log("Error: " + error);
    }
  }

  return (
    <div className=" mt-20" name='login'>
      <h1 className="text-4xl font-bold underline text-center mt-8">
        Login Form
      </h1>
      <form className="mt-16 text-center pt-12" onSubmit={show_userlogin}>
        <div>
          <label className="font-bold text-lg"> Username: &nbsp; </label>
          <input
            type="text"
            className="w-64  p-4 rounded border-gray-200 border-2  "
            placeholder="Enter UserName here"
            value={useremail}
            onChange={(event) => {
              setUseremail(event.target.value);
            }}
          />
        </div>
        <div className="mt-16">
          <label className="font-bold text-lg"> Password: &nbsp;</label>
          <input
            type="password"
            className="w-64 p-4 rounded border-gray-200 border-2 "
            placeholder="Enter Password here"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button
          onClick={handle_Login}
          type="submit"
          className="mt-16 bg-blue-600 text-white  border-2 border-black/30 font-bold p-4 rounded-lg "
        >
          {" "}
          Login Here
        </button>
        <Link
            to="/"
            className="underline text-blue-800 ml-12 tracking-wider test-lg"
          >
            New to This
          </Link>
        {/* <div>
          <p> Encrypted Password: {encryptedPassword}</p>
          <p>Decrypted Password: {decryptedPassword}</p>
        </div> */}
      </form>
    </div>
  );
};

export default MyForm;
