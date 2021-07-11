import React, {Component} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Container} from "reactstrap";
import "../css/site.css";

export default class Layout extends Component{
    render() {
        return(
            <div className="layout">
                <Header/>
                    <Container>
                        {this.props.children}
                    </Container>
                <Footer/>
            </div>
        );
    }
}