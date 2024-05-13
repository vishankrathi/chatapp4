import "./Signup.css";
import Headingcomp from "./Headingcomp";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';
const Signin = () => {
  const[Inputs,setInputs]=useState({
    email:"",
    password:"",
});
const change =(e)=>{
  const {name,value} = e.target;
  setInputs({...Inputs,[name]:value});
};
const submit =  async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:5174/api/v1/signin",Inputs).then((response)=>{
console.log(response.data.others._id);
  });
} 
  return (
    <div className="signup">
        <div className="container">
            <div className="row">
            <div className="col-lg-4 column-left d-flex justify-content-center align-items-center ">
                    <Headingcomp first="sign" second="In"/>
                 </div>
                 <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column w-100 p-5">
                        <input 
                        className='p-2 my-3 input-signup'
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        onChange={change}
                         value={Inputs.email}/>
                          <input 
                        className='p-2 my-3 input-signup'
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        value={Inputs.password}/>
                    <button className="btn-signup p-2" oonClick={submit}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin;
