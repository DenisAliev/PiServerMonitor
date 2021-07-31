import React from "react";
import {ChStatusBar} from "../../components/StatusBar";
import {ChControlButtons} from "../../components/ControlButtons";

export default function ControlPanel(){
        
        return(
            <div>
               <ChStatusBar/>
                    <ChControlButtons/>
            </div>
        );
}