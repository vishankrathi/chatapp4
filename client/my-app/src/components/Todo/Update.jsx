import React from 'react'

const Update = (display) => {
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
        <h1>Update your task</h1>
        <input type="text" className="todo-inputs my-4 w-100 p-3"/>
        <textarea className="todo-inputs w-100 p-3"/>
        <div>
        <button className="btn btn-dark my-4">update</button>
        <button className="btn btn-danger my-4 mx-3" onClick={()=>display("none")}>close</button>
        </div>
    </div>
  );
};

export default Update;
