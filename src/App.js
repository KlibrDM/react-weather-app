import React, {useState, useEffect} from 'react';

import CurrentData from './components/CurrentData/CurrentData';
import Forecast from './components/Forecast/Forecast';

import './App.css';

function App() {
  const [userData, setUserData] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  //Get location from IP
  useEffect(() => {
    fetch("https://ip.nf/me.json")
      .then(res => res.json())
      .then(
        (result) => {
          result.ip.latitude = result.ip.latitude.toFixed(4);
          result.ip.longitude = result.ip.longitude.toFixed(4);
          setUserData(result.ip);
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  //Get weather data based on location
  useEffect(() => {
    //Prevent checking on first render because userData will not be defined
    if(userData.latitude !== undefined){
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${userData.latitude}&longitude=${userData.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FMoscow`)
      .then(res => res.json())
      .then(
        (result) => {
          setWeatherData(result);
          setDataLoaded(true);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }, [userData]);

  return (
    <div className="App">
      { dataLoaded ?
      <>
        <CurrentData
          data={weatherData.current_weather}
          dataUnits={weatherData.daily_units}
          userData={userData}
        ></CurrentData>
        <Forecast
          data={weatherData.daily}
          dataUnits={weatherData.daily_units}
        ></Forecast>
      </>
      : <></> }
    </div>
  );
}

export default App;
