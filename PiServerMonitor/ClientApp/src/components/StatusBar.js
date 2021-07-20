import React, {useState} from "react";
import {Row, Col, Card, CardTitle } from "reactstrap";
import '../css/status-bar.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function StatusBar() {
    const [infoStatuses, setInfoStatuses] = useState([{text:"Test",color:"info",progress:25},
        {text:"Test",color:"info",progress:25}]);
    
    return(
            <div>
                <Row className="status-bar-row" style={{justifyContent:"center"}}>
                {infoStatuses.map( (infoStatus,i) =>{
                    return(
                            <Col sm="3">
                                <Card body s>
                                    <CardTitle tag="h1" style={{textAlign:"center"}}>{infoStatus.text}</CardTitle>
                                    <CircularProgressbar value={infoStatus.progress} text={`${infoStatus.progress}%`}/>
                                </Card>
                            </Col>
                    );
                })}
                </Row>
            </div>
    );
 
}