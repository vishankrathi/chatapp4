import RegisterAndLoginForm from "./RegisterAndloginForm.jsx";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
import Chat from "./Chatting";
export default function Routes(){
    const {username,id}=useContext(UserContext);
        if(username){
        return <Chatting />;
    }
    return (
        <RegisterAndLoginForm />
    );
} 
