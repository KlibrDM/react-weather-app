export function WeatherCodeName(code) {
  switch(code){
    case 0: return "Clear sky";
    case 1: return "Mainly clear";
    case 2: return "Partly cloudy";
    case 3: return "Overcast";
    case 45: return "Fog";
    case 48: return "Depositing rime fog";
    case 51: return "Light drizzle";
    case 53: return "Moderate drizzle";
    case 55: return "Dense drizzle";
    case 56: return "Freezing drizzle";
    case 57: return "Dense freezing drizzle";
    case 61: return "Slight rain";
    case 63: return "Moderate rain";
    case 65: return "Heavy rain";
    case 66: return "Freezing rain";
    case 67: return "Heavy freezing rain";
    case 71: return "Slight snow fall";
    case 73: return "Moderate snow fall";
    case 75: return "Heavy snow fall";
    case 77: return "Snow grains";
    case 80: return "Rain shower";
    case 81: return "Moderate rain shower";
    case 82: return "Violent rain shower";
    case 85: return "Snow shower";
    case 86: return "Heavy snow shower";
    case 95: return "Thunderstorm";
    case 96: return "Thunderstorm with hail";
    case 99: return "Thunderstorm with hail";
    default: return "Good weather today!";
  }
}

export function monthName(month){
  switch(month){
    case 0: return "Jan";
    case 1: return "Feb";
    case 2: return "Mar";
    case 3: return "Apr";
    case 4: return "May";
    case 5: return "Jun";
    case 6: return "Jul";
    case 7: return "Aug";
    case 8: return "Sep";
    case 9: return "Oct";
    case 10: return "Nov";
    case 11: return "Dec";
    default: return "Jan";
  }
}

export function dayName(day){
  switch(day){
    case 0: return "Sun";
    case 1: return "Mon";
    case 2: return "Tue";
    case 3: return "Wed";
    case 4: return "Thu";
    case 5: return "Fri";
    case 6: return "Sat";
    default: return "Sun";
  }
}