import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        number1: parseFloat(number1),
        number2: parseFloat(number2),
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error calculating:', error.message);
    }
  };

  const getResult = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-result');
      setResult(response.data.result);
    } catch (error) {
      console.error('Error getting result:', error.message);
    }
  };

  const printPDF = async () => {
    try {
      const response = await axios.get('http://localhost:5000/print-pdf');
      console.log(response.data.message);
    } catch (error) {
      console.error('Error printing PDF:', error.message);
    }
  };

  return (
    <div>
      <h1>Calculator App</h1>
      <div>
        <label>Number 1:</label>
        <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      </div>
      <div>
        <label>Number 2:</label>
        <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      </div>
      <button onClick={calculate}>Calculate</button>
      <div>
        <label>Result:</label>
        <span>{result}</span>
      </div>
      <button onClick={getResult}>Get Result</button>
      <button onClick={printPDF}>Print PDF</button>
    </div>
  );
}

export default App;
