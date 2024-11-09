import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [count, setCount] = useState(0);

  // function Clickbutton() {
  //   alert("I'm Clicked")
  // }

  function handleMouseOver() {
    toast.success("Wow so easy!");
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h1 className="text-red-400 font-bold text-2xl uppercase">
        {" "}
        Chal hatttt
      </h1>

      <h1 className="font-bold ">Counting {count}</h1>
   
      <button
        className="p-3 bg-black text-white"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>

      <Card>
        <h2>Dinkar Kumar</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sit officia nesciunt exercitationem perspiciatis repellendus magnam
          asperiores, saepe animi at.
        </p>
      </Card>

      <button
        onClick={() => {
          alert("I'm Clicked");
        }}
      >
        Click here
      </button>

      <p onMouseOver={handleMouseOver}>Edr mt aao</p>
    </>
  );
}

export default App;
