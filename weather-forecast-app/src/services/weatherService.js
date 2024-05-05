import { DateTime } from "luxon";

const API_KEY = "2e0d000e702c4105890caba964ef6ad4";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = async (infoType, searchParams) => {
  try {
    const url = new URL(`${BASE_URL}/${infoType}`);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
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

const formatForecastWeather = (data) => {
  const { timezone, daily, hourly } = data;
  const formattedDaily = daily.slice(0, 7).map((d) => ({
    title: formatToLocalTime(d.dt, timezone, "ccc"),
    temp: d.temp.day,
    icon: d.weather[0].icon,
  }));

  const formattedHourly = hourly.slice(0, 7).map((d) => ({
    title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
    temp: d.temp,
    icon: d.weather[0].icon,
  }));

  return { timezone, daily: formattedDaily, hourly: formattedHourly };
};

const getFormattedWeatherData = async (searchParams) => {
  try {
    const formattedCurrentWeather = await getWeatherData(
      "weather",
      searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("forecast", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
  } catch (error) {
    console.error("Error getting formatted weather data:", error);
    throw error;
  }
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
