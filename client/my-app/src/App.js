import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signup/Signin";
import Todo from "./components/Todo/Todo";
const App=()=>{
  return(<div>
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="" element={<Home/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/Todo" element={<Todo/>}/>
    <Route  path="/Signup" element={<Signup/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    </Routes>
    </Router>
  </div>
  );
};

export default App;
