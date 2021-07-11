import React, {Component} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Container} from "reactstrap";

export default class Layout extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Container>
                    {this.props.children}
                </Container>
                <Footer/>
            </div>
        );
    }
}