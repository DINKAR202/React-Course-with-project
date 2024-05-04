import { DateTime } from "luxon";

const API_KEY = "2e0d000e702c4105890caba964ef6ad4";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

// const formatForecastWeather = (data) => {
//   let { timezone, daily, hourly } = data;
//   daily = daily.slice(1, 6).map(d=> {
//     return{
//       title: formatToLocalTime(d.dt, timezone, 'ccc'),
//       temp: d.temp.day,
//       icon: d.weather[0].icon
//     }
//   });

//   hourly = hourly.slice(1, 6).map(d=> {
//     return{
//       title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
//       temp: d.temp.day,
//       icon: d.weather[0].icon
//     }
//   });

//   return {timezone, daily, hourly};
// };

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  // Check if daily and hourly arrays are defined and not empty
  if (daily && daily.length > 1) {
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
  } else {
    daily = []; // Set to empty array if not defined or empty
  }

  if (hourly && hourly.length > 1) {
    hourly = hourly.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
  } else {
    hourly = []; // Set to empty array if not defined or empty
  }

  return { timezone, daily, hourly };
};


const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("oncall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return {...formattedCurrentWeather, ...formattedForecastWeather};
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;
