import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
const Navbar = () =>{
    return<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">
    <b>todo</b>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
    <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between align-items-center w-50">
      <li className="nav-item">
        <Link className="nav-link active " to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active " to="/about">About us <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active " to="/Todo">todo <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active btn-nav" to="/Signup">signUp<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active btn-nav" to="/Signin">Signin <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active btn-nav" to="#">Logout<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active" to="#">
          <img className="img-fluid user-png" src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"></img>
        </Link>
      </li>
    </ul>
  </div>
</nav>
</div>
}
export default Navbar;