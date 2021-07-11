
import React from "react";
import {Button, Form, FormGroup, Label, Container, Input, FormText, Row, Col} from 'reactstrap';
import "../css/site.css";

export default class Login extends React.Component{
    render() {
        return(
            <Row>
                <Col sm="xs" md={{ size: 6, offset: 3 }}>
                    <Form className="login-form">
                        <FormGroup>
                            <Label for="login">Login</Label>
                            <Input type="text" name="login" id="login" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="password placeholder" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}