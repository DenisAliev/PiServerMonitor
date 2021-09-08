import React, {useEffect, useState} from "react";
import webAPI from "../../services/webAPI.service";

export default function WithStats(WrapperComponent, timeInterval){
    
    return function WithStats(props) {
        
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
            }, timeInterval);
            return () => clearInterval(interval);
        }, []);
        return(
            <WrapperComponent stats={Stats} {...props}/>
        );
    }
}