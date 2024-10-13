import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="text-red-700 font-bold text-center text-xl uppercase">
        For Practice Session
      </h1>

      <div>
        <ul>
          {records.map((list, index) => {
            return (
              <li className="text-red-500" key={index}>
                {list?.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
