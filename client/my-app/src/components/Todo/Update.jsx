import React from 'react'
import axios from axios;
import {toast} from "react-toastify";
const Update = (display,update) => {
    useEffect(()=> {
      setInputs({
        title:update.title,
        body:update.body,
      });
    },[update]);
  const[Inputs,setInputs]=useState({
    titile: "",
    body: "",
  });
  const change=(e)=>{
    const{name,value}=e.target;
    setInputs({...Inputs,[name]:value});
};
const submit=async()=>{
  await axios
  .put('http://localhost:3000/api/v2/updateTask/${update._id}',Inputs)
  .then((response)=>{
    toast.success(response.data.message);
  });
  display("none");
};
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
        <h1>Update your task</h1>
        <input type="text" className="todo-inputs my-4 w-100 p-3"name="title" onChange={change} value={Inputs.title}/>
        <textarea className="todo-inputs w-100 p-3" name="body"value={Inputs.body}/>
        <div>
        <button className="btn btn-dark my-4">update</button>
        <button className="btn btn-danger my-4 mx-3" onClick={submit}>close</button>
        </div>
    </div>
  );
};

export default Update;
