import React, { useState } from "react";

const Colors = () => {
  const [color, setColor] = useState("Green");

  return (
    <>
      <h1>This is my Favorite {color} color!</h1>

      <div className="container border w-100 d-flex justify-content-around">
        <button className="btn btn-secondary onClick={() => setColor("blue")}">Click Me</button>
        <button className="btn btn-warning">Click Me</button>
        <button className="btn btn-primary">Click Me</button>
        <button className="btn btn-success">Click Me</button>
        <button className="btn btn-danger">Click Me</button>
      </div>
    </>
  );
};

export default Colors;
