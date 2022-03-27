import './Forecast.css';
import WeatherCodeImage from '../WeatherCodeImage/WeatherCodeImage';
import * as utils from "../utils";

export default function Forecast({ data, dataUnits }) {
  let currentDate = new Date();
  let tomorrowDate = new Date();
  tomorrowDate.setDate(currentDate.getDate() + 1);

  return (
    <div className="forecast">
      <div className="forecast-data">
        {
          [0,1,2,3,4,5,6].map((e, index) => {
            let date = new Date(data.time[e]);
            let dateMonthName = utils.monthName(date.getMonth());
            let dayName = utils.dayName(date.getDay());

            return (
            <div className="daily-forecast" id={"day-"+e} key={index}>
              <WeatherCodeImage
                code={data.weathercode[e]}
              >
              </WeatherCodeImage>
              <p>
                <span className="daily-max">{data.temperature_2m_max[e]}{dataUnits.temperature_2m_max}</span>
                /
                <span className="daily-min">{data.temperature_2m_min[e]}{dataUnits.temperature_2m_min}</span>
              </p>
              <p className="daily-weather-code-name">{utils.WeatherCodeName(data.weathercode[e])}</p>
              <p className="daily-date">{
                date.getDate() === currentDate.getDate()
                ? "Today" 
                : date.getDate() === tomorrowDate.getDate()
                ? "Tomorrow" 
                : dayName+", "+('0' + date.getDate()).slice(-2)+" "+dateMonthName}
              </p>
            </div>
          )})
        }
      </div>
    </div>
  )
}
