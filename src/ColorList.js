import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList() {
  const [colorString, setColorString] = useState("000000");
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("#000000");
  const [savedColors, setSavedColors] = useState(
    JSON.parse(localStorage.getItem("item"))
  );

  console.log(savedColors);
  const submitColor = (e) => {
    e.preventDefault();
  };
  const submitText = (e) => {
    e.preventDefault();
    setText(e.target.value);
    localStorage.setItem("item", JSON.stringify(savedColors));
  };

  const handleColorChange = (e) => {
    let target = e.target.value;
    setColorString(target.substring(1));
    setColor(target);
    setText(target);
  };

  const saveColor = () => {
    setSavedColors((savedColors) => ({
      ...savedColors,
      [text.substring(1)]: color,
    }));
    setText("");
  };

  return (
    <div className="homePage">
      <div className="firstSection">
        <h1>Welcome to the Color Factory</h1>
        <h3>Your chosen color is: {color}</h3>
        <form className="colorForm" onSubmit={submitColor}>
          <input
            type="color"
            name="color"
            value={color}
            onChange={handleColorChange}
          ></input>
        </form>
        <Link to={`/colors/${colorString}`}>Magic</Link>
      </div>

      <div style={{ backgroundColor: `${color}` }} className="savedColor">
        <form onSubmit={submitText}>
          <input type="text" name="text" value={text}></input>
          <button onClick={saveColor}>Save Color</button>
        </form>
      </div>

      {!savedColors ? (
        <div></div>
      ) : (
        <div>
          <h2>Saved Colors</h2>
          <div className="savedColorSection">
            {Object.keys(savedColors).map((key, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: `${savedColors[key]}` }}
                  className="savedColorList"
                >
                  <Link to={`/colors/${key}`}>
                    {key}
                    {savedColors[index]}
                  </Link>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => {
              localStorage.clear();
              setSavedColors(null);
            }}
          >
            Clear Saved Colors
          </button>
        </div>
      )}
    </div>
  );
}

export default ColorList;
