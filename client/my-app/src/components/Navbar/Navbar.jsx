import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
const Navbar = () =>{
  const dispatch = useDispatch()
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const logout = () => {
    dispatch(authActions.logout());
    sessionStorage.removeItem("id");
    window.location.reload();
  }
  console.log(isLoggedin);
    return(<div>
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
      {!isLoggedin && (<>  <li className="nav-item ">
        <Link className="nav-link active btn-nav" to="/Signup">signUp</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active btn-nav" to="/Signin">Signin</Link>
      </li></>)}
        { isLoggedin && (<li className="nav-item "onClick={logout}>
         <Link className="nav-link active btn-nav" to="#">Logout</Link>
       </li>)}
      
      <li className="nav-item ">
        <Link className="nav-link active" to="#">
          <img className="img-fluid user-png" src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"></img>
        </Link>
      </li>
    </ul>
  </div>
</nav>
</div>
    )
}
export default Navbar;