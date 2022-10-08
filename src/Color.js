import React, { useEffect, useState } from "react";
import "./Color.css";
import { Link, useParams } from "react-router-dom";
import ColorList from "./ColorList";

function Color() {
  const { color } = useParams();
  const [goHome, setGoHome] = useState(true);

  useEffect(() => {
    console.log(goHome);
    console.log(color);
    if (color.length == 4 || color.length == 7) {
      setGoHome(false);
    }
    for (let i = 1; i < color.length; i++) {
      if (
        (color[i] >= "0" && color[i] <= 9) ||
        (color[i] >= "a" && color[i] <= "f") ||
        color[i] >= "A" ||
        color[i] <= "F"
      ) {
        setGoHome(false);
      }
    }
    setGoHome(true);
  }, []);
  return (
    <div>
      {goHome ? (
        <ColorList />
      ) : (
        <div
          style={{
            backgroundColor: `#${color}`,
          }}
          className="color"
        >
          <div className="colorText">
            <h1>Here is your color</h1>
            <h3>Isn't it Pretty</h3>
            <h5>Yay</h5>
            <Link to={"/"}>Home</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Color;
