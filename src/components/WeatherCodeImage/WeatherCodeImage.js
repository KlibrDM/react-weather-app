import c from "../../images/c.svg";
import lc from "../../images/lc.svg";
import hc from "../../images/hc.svg";
import s from "../../images/s.svg";
import lr from "../../images/lr.svg";
import hr from "../../images/hr.svg";
import t from "../../images/t.svg";
import h from "../../images/h.svg";
import sl from "../../images/sl.svg";
import sn from "../../images/sn.svg";

import { WeatherCodeName } from "../utils";

export default function WeatherCodeImage({ code }) {
  switch(code){
    case 0: return (<img src={c} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 1: return (<img src={c} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 2: return (<img src={lc} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 3: return (<img src={hc} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 45: return (<img src={hc} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 48: return (<img src={hc} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 51: return (<img src={lr} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 53: return (<img src={lr} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 55: return (<img src={hr} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 56: return (<img src={sl} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 57: return (<img src={sl} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 61: return (<img src={lr} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 63: return (<img src={lr} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 65: return (<img src={hr} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 66: return (<img src={sl} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 67: return (<img src={sl} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 71: return (<img src={sn} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 73: return (<img src={sn} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 75: return (<img src={sn} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 77: return (<img src={sn} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 80: return (<img src={s} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 81: return (<img src={s} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 82: return (<img src={s} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 85: return (<img src={sn} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 86: return (<img src={sn} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 95: return (<img src={t} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 96: return (<img src={h} className="weather-code-image" alt={WeatherCodeName(code)} />);
    case 99: return (<img src={h} className="weather-code-image" alt={WeatherCodeName(code)} />);
    default: return (<img src={lc} className="weather-code-image" alt="Good weather today!" />);
  }
}