import React, {Component} from "react";
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import User from "../../services/user.service";

export default function NavMenu(){
    
    let auth;
    if(User.isAuthenticated()){
        auth = (
            <NavItem>
                <NavLink href="/" style={{justifyContent:"right"}} onClick={()=>{User.removeToken();}}>LogOut</NavLink>
            </NavItem>
        );
    }else{
        auth = (
            <NavItem>
                <NavLink href="/">Login</NavLink>
            </NavItem>
        );
    }
    
    return(
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/panel/">Panel</NavLink>
                </NavItem>
                {auth}
            </Nav>  
    );

}