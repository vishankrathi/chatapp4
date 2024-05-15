import React from "react";
import { MdDelete } from "react-icons/md";
import {GrDocumentUpdate} from "react-icons/gr";
const Todocards=({title,body,id,delid,display,toBeUpdateId,updateId,}) =>{
return (
<div className="p-3 todo-card">
    <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("",15)}...</p>
    </div>
    <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 " onClick = {()=>{ delid(id);
        }}>
            <MdDelete className="card-icons del"/>delete
        </div>
        <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger" onClick = {()=>{ display("block");
            toBeUpdateId(updateId);
        }}/>
            <GrDocumentUpdate className="card-icons"/>{" "}update
        </div>
    </div>
    
)
}
export default Todocards;
