import React from "react";
import "./Color.css";
import { Link, useParams } from "react-router-dom";

function Color() {
  const { color } = useParams();
  return (
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
      </div>
    </div>
  );
}

export default Color;
