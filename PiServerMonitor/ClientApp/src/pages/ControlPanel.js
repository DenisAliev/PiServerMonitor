import React from "react";
import "../css/site.css";
import {Row} from 'reactstrap';
import StatusBar from "../components/StatusBar";

export default class ControlPanel extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <StatusBar/>
        );
    }
}