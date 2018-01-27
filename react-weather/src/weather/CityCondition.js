import React from 'react';

export default function CityCondition(props){

    const {city, weather, temp, desc} = props; // desctructing declaration
    return  <section id="left">
        <div id="location">{city}</div>
        <div id="weather">{weather}</div>
        <div id="temperature">{temp}&#176;C</div>
        <div id="desc">{desc}</div>
        </section>;
}