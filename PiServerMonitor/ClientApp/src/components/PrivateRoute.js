import {Route, Redirect} from "react-router-dom";
import React from "react";
import User from "../services/user.service";

export default function PrivateRoute(props){
    
    if(User.isAuthenticated()){
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