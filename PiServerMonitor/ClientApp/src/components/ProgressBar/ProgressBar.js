import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import { Col, Card, CardTitle } from "reactstrap";
import 'react-circular-progressbar/dist/styles.css';
export default function ProgressBar(props){
    return(
        <Col sm="3">
            <Card body s style={{MinWidth:"300px"}}>
                <CardTitle tag="h1" style={{textAlign:"center"}}>{props.text}</CardTitle>
                <CircularProgressbar value={props.value} text={`${props.value + props.unit}`}/>
            </Card>
        </Col>  
    );
}