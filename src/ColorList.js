import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList() {
  const [colorString, setColorString] = useState("000000");
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("#000000");
  const [savedColors, setSavedColors] = useState({});

  const submitColor = (e) => {
    e.preventDefault();
  };
  const submitText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleColorChange = (e) => {
    let target = e.target.value;
    setColorString(target.substring(1));
    setColor(target);
    setText(target);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const saveColor = () => {
    setSavedColors((savedColors) => ({ ...savedColors, [text]: color }));
    setText("");
    console.log(savedColors);
  };

  return (
    <div className="homePage">
      <h1>Welcome to the Color Factory</h1>
      <h2>Saved Colors</h2>
      {Object.keys(savedColors).map((key, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: `${color}` }}
            className="savedColor"
          >
            <Link to={`/colors/${colorString}`}>{key}</Link>
          </div>
        );
      })}
      <h3>Your chosen color is: {color}</h3>
      <form onSubmit={submitColor}>
        <input
          type="color"
          name="color"
          value={color}
          onChange={handleColorChange}
        ></input>
      </form>
      <Link to={`/colors/${colorString}`}>Magic</Link>
      <h3>Save Color</h3>
      <div style={{ backgroundColor: `${color}` }} className="savedColor">
        <form onSubmit={submitText}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={handleTextChange}
          ></input>
          <button onClick={saveColor}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default ColorList;
