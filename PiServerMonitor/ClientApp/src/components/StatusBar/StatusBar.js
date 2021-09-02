import React from "react";
import {Row} from "reactstrap";
import "./StatusBar.css"
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from "../ProgressBar";


export default function StatusBar(props) {
    
    return(
            <div>
                <Row className="status-bar-row" style={{justifyContent:"left"}}>
                {props.stats.map( (status, i) =>{
                    return(
                        <ProgressBar value={status.value} text={status.text} unit={status.unit}/>
                    );
                })}
                </Row>
            </div>
    );
}