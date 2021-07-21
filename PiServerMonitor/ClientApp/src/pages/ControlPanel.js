import React from "react";
import "../css/site.css";
import {Row} from 'reactstrap';
import StatusBar from "../components/StatusBar";
import ControlButtons from "../components/ControlButtons";

export default class ControlPanel extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <StatusBar/>
                <ControlButtons/>
            </div>
        );
    }
}