const CONDITION_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/';
const FORECAST_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';

const condition_XHR = new XMLHttpRequest();


const forecast_XHR = new XMLHttpRequest();
export function fetchConditionData(city, onloadFun){
    // console.log( CONDITION_BASE_URL+ city + '.json');
    condition_XHR.open("GET",CONDITION_BASE_URL+ city + '.json', true);

    condition_XHR.responseType = 'text';
    condition_XHR.send(null);
    
    condition_XHR.onload = ()=>{
        // console.log(condition_XHR.responseText);
        
        let conditionORI = JSON.parse(condition_XHR.responseText);
        let conditionPRI = conditionORI.current_observation;
        console.log(conditionORI);
        onloadFun(conditionPRI);
        
    };
}









export function fetchForecast(city, onloadFun){
    // console.log( FORECAST_BASE_URL+ city + '.json');
    forecast_XHR.open("GET",FORECAST_BASE_URL+ city + '.json', true);

    forecast_XHR.responseType = 'text';
    forecast_XHR.send(null);
    let forarr = [];
    forecast_XHR.onload = ()=>{
        // console.log(condition_XHR.responseText);
        let forecastORI = JSON.parse(forecast_XHR.responseText);
        let forecastPRI = forecastORI.forecast['simpleforecast']['forecastday'];
        // console.log(forecastPRI);
        onloadFun(forecastPRI);
        
    };

    
}

