import React, {useState} from "react";
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import Authentication from "../../services/authentication.service";
import User from "../../services/user.service";
import "./LoginForm.css";

export default function LoginForm(props) {
    let loginInput = React.createRef();
    let passwordInput = React.createRef();

    let onSubmitHandler = async (e) => {
        e.preventDefault()
        let login = loginInput.current.value;
        let password = passwordInput.current.value;
        let token = await Authentication.getToken(login, password);
        if(token){
            User.removeToken();
            User.setToken(token);
            console.log(props.handler);
            props.handler(true);
        }else{
            loginInput.current.value = "";
            passwordInput.current.value = "";
        }
    }
    return(
        <Row style={{JustifyContent: 'center'}}>
            <Col sm="xs">
                <Form className="login-form" onSubmit={onSubmitHandler}>
                    <FormGroup>
                        <Label for="login">Login</Label>
                        <Input type="text" name="login" id="login" placeholder="Login" innerRef={loginInput}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password"
                               innerRef={passwordInput}/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Col>
        </Row>  
    );
}