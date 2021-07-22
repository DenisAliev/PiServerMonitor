import {Route, Redirect} from "react-router-dom";
import React, {useEffect, useState} from "react";
import User from "../services/user.service";

export default function PrivateRoute(props){
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(()=>{
        User.isAuthenticated().then( data => setIsAuthenticated(data));    
    });
    if(User.isAuthenticated){
       return(
           <Route path={props.path} component={props.component}/>
       ) 
    }
    else{
        return(
            <Redirect to="/"/>
        );
    }
}