import React, { Component } from 'react';
import ReactDOM from 'react-dom';



import CityCondition from './CityCondition';
import Forecaster from './Forecaster';
import {fetchConditionData,fetchForecast} from './weather';

export default class WeatherChannel extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            conditionData : {
                city : 'Brisbane',
                weahter : 'Cloudy',
                temp :'22',
                desc: 'A mix of cloudy'
            },
            forecastData :[
                // {weekday : 'Mon', high: 30, low: 15},
                // {weekday : 'Tue', high: 30, low: 15},
                // {weekday : 'Wed', high: 29, low: 15},
                // {weekday : 'Thu', high: 28, low: 15},
                // {weekday : 'Fri', high: 30, low: 15}
            ]
        }
    }

    componentDidMount() {
        let self = this;
        //condition
        let onloadFunCondition = function(data){            
            let obj = {};
            obj['temp'] = data['temp_c'];
            obj['weather'] = data.weather;
            obj['city'] = data.display_location.city;
        
            // console.log(obj);
            // return {weekday:e.date.weekday, high:e.high.celsius, low: e.low.celsius};       
        self.setState({conditionData:obj});  
     }   
        fetchConditionData('Brisbane', onloadFunCondition);






        //forecast
        let onloadFunForecast = function(data){
            // console.log(data);
            let forarr = data.map(function(e){
                let obj = {};
                obj['weekday'] = e.date.weekday;
                obj['high'] = e.high.celsius;
                obj['low'] = e.low.celsius;
            
                // console.log(obj);
                // return {weekday:e.date.weekday, high:e.high.celsius, low: e.low.celsius};
                return obj;
            }); 
            self.setState({forecastData:forarr});      
        };
        fetchForecast('Brisbane', onloadFunForecast);

        


        // console.log(arr);
        // this.setState({forecastData : arr});
        
    }

    render(){
        const {city, weather, temp, desc} = this.state.conditionData;
        console.log(this.state.forecastData);
        return (
        <main>
            <section id="left"><CityCondition city={city} weather={weather} temp={temp} desc={desc}/></section>
            <section id="right"><Forecaster days={this.state.forecastData} /></section>
        </main>
        )
        
        ;
    }
}