import { useSelector } from 'react-redux';
import './App.css'

function App() {

const count = useSelector((state) => state.counter.value);

  function handleIncrementClick() {

  }

function handleDecrementClick() {

}

  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
        <p>Count:</p>
        <button onClick={handleDecrementClick}> - </button>
      </div>
    </>
  )
}

export default App
