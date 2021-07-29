import React, {useState} from "react";
import NavMenu from "./NavMenu";
import "../css/site.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText
} from 'reactstrap';


export default function Header(props){
    const [isOpen, setIsOpen] = useState(false);
    let toggle = ()=>{
      setIsOpen(!isOpen);  
    };
    return(
            <div>
                <Navbar className="header" light expand="md">
                    <NavbarBrand className="brand" href="/">PiServerMonitor</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <NavMenu/>
                    </Collapse>
                </Navbar>
            </div>
    );
}
