
import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Container, Input, FormText, Row, Col} from 'reactstrap';
import "../css/site.css";
import Authentication from "../services/authentication.service";
import User from "../services/user.service";
import {Redirect} from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Login(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    let handler = (newValue)=>{
      setIsAuthenticated(newValue);  
    };
    if(isAuthenticated){
        return(
            <Redirect to="/panel"/>
        )
    }else{
        return(
            <LoginForm handler={handler}/>
        );
    }
}