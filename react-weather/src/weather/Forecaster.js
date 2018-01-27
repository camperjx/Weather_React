import React from 'react';

function DailyItem(props){
    const day = props.day;
    return ( <div class="right">
         <span>{day.weekday}</span>
         <span> <img src={day.icon}/></span>
         <span>{day.high}</span>
         <span>{day.low}</span>
     </div>);
 }

export default function Forecaster(props){
    return  (props.days.map((d, index) =><DailyItem key={index} day={d} />) );

}