import './App.css';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import TempratureandDetails from './components/TempratureandDetails';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-700">
      <TopButtons/>
      <Inputs/>
      
      <TimeAndLocation/>
      <TempratureandDetails/>
    </div>
  );
}

export default App;
