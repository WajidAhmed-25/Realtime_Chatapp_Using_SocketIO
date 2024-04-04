import React from "react";
import './login.css'
import { useState } from "react";
import axios from "axios"; 


import bcrypt from "bcryptjs"; 

import { Link, useHistory } from "react-router-dom";


export default function My_registration(){

const [username, setUsername] = useState("");
const [useremail, setUseremail] = useState("");
const [password,setPassword] = useState("");
const [confirmpassword, setConfirmpassword] = useState("");


const history = useHistory();



const handleSubmit = async () => {
  // event.preventDefault(); 

 if (password !== confirmpassword) {
  alert("Passwords don't match. Try Again");
}
else{
  try {

    const hashedPassword = await bcrypt.hash(password, 7);

    console.log(hashedPassword);

      const response = await axios.post("http://localhost:3001/api/user/register", {
          username,
          useremail,
          password:hashedPassword
      });

      console.log(response.data); 

      console.log(hashedPassword)

      // history.push("/login");

    
      if (response.status === 200) {
        history.push("/login");
        setUsername("");
        setUseremail("");
        setPassword("");
        setConfirmpassword("");
      }

      
  } catch (error) {
      console.error("Error registering user:", error);
  }
}
};


return(
    <div className="text-center mt-28"> 
    <h1 class="text-5xl text-center font-bold underline  mt-8">
Registration Form
  </h1>

  <form className="pt-12 mt-16 text-center" onSubmit={handleSubmit}>

<div >
<label className="text-lg font-bold "> Enter Your Username: &nbsp; </label>
<input type="text"  required className="w-64 p-2 ml-8 border-2 border-gray-200 rounded " placeholder="Enter userName here"  
   onChange={(event) => {
               setUsername(event.target.value);
            }} />
</div>

<div className="mt-8">
<label className="text-lg font-bold "> Enter Your email: &nbsp; </label>
<input type="email"  required className="w-64 p-2 ml-8 border-2 border-gray-200 rounded " placeholder="Enter Email here"
onChange={(event) => {
  setUseremail(event.target.value);
}}
/>
</div>



<div className="mt-8 text-center"> 
<label className="text-lg font-bold "> Enter Password: &nbsp;</label>
<input type="password"  className="w-64 p-2 ml-12 border-2 border-gray-200 rounded " placeholder="Enter Password here" 
onChange={(event) => {
  setPassword(event.target.value);
}}
/>
</div>

<div className="mt-8 text-center"> 
<label className="text-lg font-bold "> Confirm Password: &nbsp;</label>
<input type="password"  className="w-64 p-2 ml-12 border-2 border-gray-200 rounded " placeholder="Enter Password here"
onChange={(event) => {
  setConfirmpassword(event.target.value);
}}
/>
</div>

<button type="submit"  className="p-4 mt-16 font-bold text-white bg-blue-600 border-2 rounded-lg border-black/30 " > Register Now</button>
  {/* <a  className="ml-12 tracking-wider text-blue-800 underline test-lg"> Already a Member</a> */}
  <Link to="/login" className="ml-12 tracking-wider text-blue-800 underline test-lg">Already a Member</Link>
{/* <p>{username}</p>
<p>{useremail}</p>
<p>{password}</p> */}
  {/* <p>{confirmpassword}</p> */}

  
  </form>


  </div>

)

}

