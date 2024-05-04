import "./App.css";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import TempratureandDetails from "./components/TempratureandDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "Kolkata" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
      // console.log("weather data", data);
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-700">
      <TopButtons />
      <Inputs />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempratureandDetails weather={weather} />
          <Forecast title="hourly forecast" />
          <Forecast title="daily forecast" />
        </div>
      )}
    </div>
  );
}

export default App;
