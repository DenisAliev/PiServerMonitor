import React, {useState} from "react";
import User from "../../services/user.service";
import {Redirect} from "react-router-dom";

export default function CheckAuth(WrapperComponent){
    return function CheckAuth(props){
        const [isAuth, setIsAuth] =useState(true);
        const setIsAuthHandler = (value) => setIsAuth(value);
        if (!isAuth){
           User.removeToken();
           return (
               <Redirect to="/"/>
           )
        }
        return(
            <WrapperComponent setIsAuth={setIsAuthHandler} {...props}/>
        )
    }
}