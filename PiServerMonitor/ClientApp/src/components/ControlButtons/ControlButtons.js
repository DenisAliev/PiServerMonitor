import React from "react";
import {Button, Row, Col} from "reactstrap";
import "./ControlButton.css";
import webAPI from "../../services/webAPI.service";

export default function ControlButtons(props){
    let shutdownButtonHandler = async()=>{
        try{
            await webAPI.shutdownRaspberry();
        }catch (e) {
            if(props.setIsAuth!==undefined) {
                props.setIsAuth(false);
            }
        }
    };
    let rebootButtonHandler = async()=>{
        try{
            await webAPI.rebootRaspberry();
        }catch (e) {
            if(props.setIsAuth!==undefined) {
                props.setIsAuth(false);
            }
        }
    };
    return(
      <Row className="control-buttons-panel" style={{justifyContent:"center", alignItems:"center"}}>
          <Col sm="1" style={{width:"210px"}}>
              <Button color="danger" style={{marginRight:"10px"}} onClick ={shutdownButtonHandler}>Shutdown</Button>
              <Button color="warning" onClick={rebootButtonHandler}>Reboot</Button>
          </Col>
      </Row>
    );
}