
import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Container, Input, FormText, Row, Col} from 'reactstrap';
import "../css/site.css";

export default class Login extends React.Component{
    render() {
        let loginInput = React.createRef();
        let passwordInput = React.createRef();
        let onSubmitHandler = (e) => {
            e.preventDefault()
            let login = loginInput.current.value;
            let password = passwordInput.current.value;
            
        }
        return(
            <Row>
                <Col sm="xs" md={{ size: 6, offset: 3 }}>
                    <Form className="login-form" onSubmit={onSubmitHandler}>
                        <FormGroup>
                            <Label for="login">Login</Label>
                            <Input type="text" name="login" id="login" placeholder="Login" innerRef={loginInput}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" innerRef={passwordInput} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}