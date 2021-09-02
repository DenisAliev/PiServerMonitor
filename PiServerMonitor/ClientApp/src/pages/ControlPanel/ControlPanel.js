import React from "react";
import StatusBar from "../../components/StatusBar";
import {ChControlButtons} from "../../components/ControlButtons";
import Chart from "../../components/Chart";

export default function ControlPanel() {

    return (
        <div>
            <Chart maxTicks={10}/>

            <StatusBar/>
            
            <ChControlButtons/>
            
        </div>
    );
}