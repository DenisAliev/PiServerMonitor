import React, {useEffect, useState} from "react";
import {Row, Col, Card, CardTitle } from "reactstrap";
import "./StatusBar.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import webAPI from "../../services/webAPI.service"

export default function StatusBar(props) {
    const [Stats, setStats] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
            webAPI.getInfo().then( (res) => {
                if(res!==null){
                    setStats(res);
                }else{
                    if(props.setIsAuth!==undefined) {
                        props.setIsAuth(false);
                    }
                }
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);
    
    return(
            <div>
                <Row className="status-bar-row" style={{justifyContent:"center"}}>
                {Stats.map( (Status, i) =>{
                    return(
                            <Col sm="3">
                                <Card body s>
                                    <CardTitle tag="h1" style={{textAlign:"center"}}>{Status.text}</CardTitle>
                                    <CircularProgressbar value={Status.value} text={`${Status.value}%`}/>
                                </Card>
                            </Col>
                    );
                })}
                </Row>
            </div>
    );
 
}