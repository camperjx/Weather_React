import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style.css';


import Header from './weather/Header';
import Footer from './weather/Footer';
import Nav from './weather/Nav';
import WeatherChannel from './weather/WeatherChannel';

class App extends Component {
  
  render() {
    let self = this;
    return (
      <div id='wrapper'>
        <Header />
        
        <WeatherChannel />
        <Footer />
      </div>
      
    );
  }
}

export default App;
