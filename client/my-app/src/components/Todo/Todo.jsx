import React  ,{useEffect,useState}from 'react';
import TodoCards from "./TodoCards";
import "./Todo.css";
import Update from "./Update";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {authActions} from "../../store";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const toUpdateArray={};
let id=sessionStorage.getItem("id");
const Todo = () => {
    const [Inputs,setInputs]=useState({title: "" ,body: "" });
    const [Array,setArray]=useState([]);
    const isLoggedIn=useSelector((state)=>state.isLoggedIn);
    if(isLoggedIn){
      console.log(id);
    }
    const show = () => {
        document.getElementById("textarea").style.display = "block";
    }; 
    const change = (e) => {
      const{name,value}=e.target;
      setInputs({...Inputs,[name]:value});
}
    const submit = async () =>{
      if(Inputs.title === "" || Inputs.body === ""){
        toast.error("title od body can't ne empty")
      }else{
        if(id){
          await axios.post("http://localhost:3000/api/v2/addTask",{title:Inputs.title,body:Inputs.body,id:id,})
          .then((response)=>{
            console.log(response);
          })
        setInputs({title:"",body:""});
        toast.success("your task is added");
      }else{
        setArray([...Array,Inputs]);
        setInputs({title:"",body:""});
        toast.success("your task is added");
        toast.error("Your task is not saved!Please SignUp");

      }
    }
    };
    const del = async(id) =>{
      if(id){
        await axios.delete('http://localhost:3000/api/v2/deleteTask/${Cardid}',{data:{id:id},})
        .then(()=>{
          toast.success("your task is delete")
        });
      }else{
        toast.error("please SignUp first");
      }
    
    }
    const dis=(value)=>{
      document.getElementById("todo-update").style.display=value;
    };
    const update=(value)=>{
      toUpdateArray=Array[value];
    }
    useEffect(()=>{
      if(id){
        const fetch=async()=>{
          await axios
          .get('http://localhost:3000/api/v2/getTasks/${id}')
          .then((response)=>{
            setArray(response.data.list);
          });
        };
        fetch();
      }
      },[submit]);
  return (
    <>
    <div className="todo">
    <ToastContainer/>
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
            <div className="d-flex flex-column todo-inputs-div w-50 p-1">
                <input type="text" 
                placeholder="TITLE" 
                className="my-2 p-2 todo-inputs"
                onClick={show}
                name="title"
                value={Inputs.title}
                onChange={change}
              />
                <textarea 
                id="textarea"
                type="text" 
                placeholder="BODY"
                name="body"
                className="p-2 todo-inputs"
                value={Inputs.body}
                onChange={change}
                />
            </div>
            <div className="w-50 d-flex justify-content-end my-3">
            <button className="home-btn" onClick={submit}>Add</button>
            </div>
        </div>
        <div className="container">
          {Array && Array.map((item,index)=>(
          <div className="col-lg-3 col-mx-5 my-2" key={index}>
          <TodoCards title={item.title} body={item.body} id={item._id} delid={del} display={dis} updateId={index} toBeUpdateId={update} />
          </div>
          ))
        }
        </div>
    </div>
    <div className="todo-update" id="todo-update">
    <div className="container update">
    <Update display={dis}/>
  </div>
  </div>
  </>
  );
};

export default Todo;