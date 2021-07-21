import React, {Component} from "react";
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default function NavMenu(){

    return(
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/panel/">Components</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
            </Nav>  
    );

}