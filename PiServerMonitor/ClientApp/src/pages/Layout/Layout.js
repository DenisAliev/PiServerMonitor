import React, {Component} from "react";
import Footer from "../../components/Footer"
import Header from "../../components/Header";
import {Container} from "reactstrap";
import "./Layout.css";

export default function Layout(props){
        return(
            <div className="layout">
                <Header/>
                    <Container>
                        {props.children}
                    </Container>
                <Footer/>
            </div>
        );
}