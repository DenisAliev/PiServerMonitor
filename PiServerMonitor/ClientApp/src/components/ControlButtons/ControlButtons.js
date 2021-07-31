import React from "react";
import {Button, Row, Col} from "reactstrap";
import "./ControlButton.css";

export default function ControlButtons(){
    return(
      <Row className="control-buttons-panel" style={{justifyContent:"center", alignItems:"center"}}>
          <Col sm="1" style={{width:"210px"}}>
              <Button color="danger" style={{marginRight:"10px"}}>PowerOff</Button>
              <Button color="warning">Restart</Button>
          </Col>
      </Row>
    );
}