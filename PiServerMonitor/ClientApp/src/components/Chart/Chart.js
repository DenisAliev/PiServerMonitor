import React, {useState, useEffect} from "react";
import {Row} from "reactstrap";
import {Line} from "react-chartjs-3";

function genData(rawData, maxTicks){
    
    let data = {
        labels:[...Array(maxTicks).keys()].map((value)=>value.toString()),
        datasets:[]
    };
    for( const [key, value] of Object.entries(rawData)){
        data.datasets.push({
            label: key,
            data: [...value, Array(maxTicks)].slice(0,maxTicks),
            fill: false,
            backgroundColor: 'rgb(130,188,142)',
            borderColor: 'rgba(30,255,87, 0.2)'
        });
    }
    return data;
   
}

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

export default function Chart(props) {
    
    const maxTicks = props.maxTicks;//(props.maxTicks === undefined)? 6: props.maxTicks;
    
    const [data, setData] = useState({});

    useEffect(()=>{
      props.stats.map((status, i)=>{
           if(data[status.text] === undefined){
               data[status.text] = [status.value];
           }
           data[status.text].push(status.value);
           if(Object.keys(data[status.text]).length > maxTicks){
               data[status.text].shift();
           }
       });
       setData(data);
       console.log(data);
    });
    return(
        <Row>
            <Line data={genData(data, maxTicks)} options={options}/>
        </Row>
    );
}