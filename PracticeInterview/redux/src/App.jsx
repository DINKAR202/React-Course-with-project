import './App.css'

function App() {

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
