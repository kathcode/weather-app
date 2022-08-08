import React, { useEffect, useState } from 'react';
import './App.css';
import Widget from './components/Widget/Widget';
import { IWeatherAPIResponse } from './types/services';

function App() {
  const [currentWeather, setCurrentWeather] =
    useState<IWeatherAPIResponse | null>(null);

  useEffect(() => {
    const getData = () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '308d5979b6msh383c807fedf06c7p125941jsn8370ea6e0c14',
          'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com',
        },
      };

      fetch(
        'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=json&unitGroup=us&shortColumnNames=0',
        options
      )
        .then((response) => response.json())
        .then((response) => {
          const location = Object.keys(response.locations)[0];
          setCurrentWeather(response.locations[location]);
        })
        .catch((err) => console.error(err));
    };

    getData();
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      {currentWeather && (
        <section className="cards-container">
          <Widget
            title="Weather"
            subtitle={currentWeather.name}
            bgColor="#91ddd5"
            value={currentWeather.currentConditions.temp}
          ></Widget>
          <Widget
            title="Humidity"
            subtitle={currentWeather.name}
            bgColor="#88aced"
            value={currentWeather.currentConditions.humidity}
          ></Widget>
          <Widget
            title="Visibility"
            subtitle={currentWeather.name}
            bgColor="#dbb5fd"
            value={currentWeather.currentConditions.visibility}
          ></Widget>
        </section>
      )}
    </div>
  );
}

export default App;
