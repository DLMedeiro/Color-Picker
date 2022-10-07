import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList() {
  const [colorString, setColorString] = useState("000000");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let target = e.target.value;
    setColorString(target.substring(1));
    setColor(target);
    console.log(color);
  };

  return (
    <div className="homePage">
      <h1>This is the HomePage</h1>
      <h3>Your chosen color is: {color}</h3>
      <form onSubmit={submit}>
        <input
          type="color"
          name="color"
          value={color}
          onChange={handleChange}
        ></input>
      </form>
      <Link to={`/colors/${colorString}`}>Magic</Link>
    </div>
  );
}

export default ColorList;
