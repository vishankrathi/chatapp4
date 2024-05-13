import React from "react";
import "./Home.css";
const Home = () =>{
    return(
        <div className="home d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h1>
                    organize your<br/> work and life ,finally
                </h1>
                <p>
                    become focused ,organized,and caln with<br/>
                    todo app.The world's Task manager app. 
                </p>
                <button className="home-btn">make todo list</button>
            </div>
        </div>
    )

}
export default Home;