import "./Signup.css";
import Headingcomp from "./Headingcomp";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';
import {authActions} from "../../store";
import {useDispatch} from "react-redux";
const Signin = () => {
  const history = useNavigate();
  const dispatch=useDispatch();
  const[Inputs,setInputs]=useState({
    email:'',
    password:'',
});
const change =(e)=>{
  const {name,value} = e.target;
  setInputs({...Inputs,[name]:value});
};
const submit =  async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:3000/api/v1/signin",Inputs).then((response)=>{
sessionStorage.getItem("id",response.data.others._id);
dispatch(authActions.login());
history("/Todo");
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
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={Inputs.password}
                onChange={change}
              />
                    <button className="btn-signup p-2" onClick={submit}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin;
