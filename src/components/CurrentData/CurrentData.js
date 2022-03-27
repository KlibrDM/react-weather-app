import './CurrentData.css';
import WeatherCodeImage from '../WeatherCodeImage/WeatherCodeImage';
import Clock from '../Clock/Clock';
import * as utils from "../utils";

import bg from "../../images/weatherbg.png";

export default function CurrentData({ data, dataUnits, userData }) {
  let currentDate = new Date();
  return (
    <div className="current-data">
      <div className="current-data-data" style={{backgroundImage: "url("+bg+")"}}>
        <h1 className="current-location">
          {userData.city !== "" ? userData.city+", "+userData.country : userData.country}
        </h1>
        <WeatherCodeImage
          code={data.weathercode}
        >
        </WeatherCodeImage>
        <h2 className="current-temperature">{data.temperature}{dataUnits.temperature_2m_max}</h2>
        <p className="current-weather-code-name">{utils.WeatherCodeName(data.weathercode)}</p>
      </div>
      <div className="current-date">
        <p className="current-day">
          {utils.dayName(currentDate.getDay())+", " +
          ('0' + currentDate.getDate()).slice(-2)+" " +
          utils.monthName(currentDate.getMonth())}
        </p>
        <Clock></Clock>
      </div>
    </div>
  )
}
