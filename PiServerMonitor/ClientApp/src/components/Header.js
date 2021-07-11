import React, {Component} from "react";
import NavMenu from "./NavMenu";
import "../css/site.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText
} from 'reactstrap';


export default class Header extends Component{

    constructor(props){
        super(props);
        this.state = { isOpen: false};
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({ isOpen: !this.state.isOpen});
    }
    render() {
        return(
            <div>
                <Navbar className="header" light expand="md">
                    <NavbarBrand className="brand" href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <NavMenu/>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}