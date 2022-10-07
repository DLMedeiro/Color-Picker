import React, { useState } from "react";
import { Link } from "react-router-dom";

function ColorList() {
  const [color, setColor] = useState("");

  const submit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let target = e.target.value;
    setColor(target.substring(1));
    console.log(color);
  };

  return (
    <div>
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
      <Link to={`/colors/${color}`}>Color</Link>
    </div>
  );
}

export default ColorList;
