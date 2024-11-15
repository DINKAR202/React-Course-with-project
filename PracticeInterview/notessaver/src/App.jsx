import "./App.css";
import createBrowserRouter from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Home/>
    </div>,
  },
  {
    path: "/pastes",
    element: <div></div>,
  },
  {
    path: "/pastes/:id",
    element: <div></div>,
  },
]);

function App() {
  return (
    <>
      <h1 className="font-bold">HI</h1>
    </>
  );
}

export default App;
