import './App.css';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import TempratureandDetails from './components/TempratureandDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';

function App() {

  const fetchWeather = async () => {
    const data =await getFormattedWeatherData("weather", {q:"london"});
    console.log(data)
  }

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-700">
      <TopButtons/>
      <Inputs/>
      
      <TimeAndLocation/>
      <TempratureandDetails/>
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
