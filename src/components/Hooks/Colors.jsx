import React, { useState } from "react";

const Colors = () => {
  const [color, setColor] = useState("Green");

  return (
    <>
      <h1>This is my Favorite {color} color!</h1>

      <div className="container border w-100 d-flex justify-content-around">
        <button
          className="btn btn-secondary"
          onClick={() => setColor("Secondary")}
        >
          Click Me
        </button>
        <button className="btn btn-warning" onClick={() => setColor("Warning")}>
          Click Me
        </button>
        <button className="btn btn-primary" onClick={() => setColor("Primary")}>
          Click Me
        </button>
        <button className="btn btn-success" onClick={() => setColor("Success")}>
          Click Me
        </button>
        <button className="btn btn-danger" onClick={() => setColor("Danger")}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default Colors;
