import React, { useEffect, useState } from "react";
import "./Color.css";
import { Link, useParams, useNavigate } from "react-router-dom";
// import ColorList from "./ColorList";

function Color() {
  const navigate = useNavigate();
  const { color } = useParams();
  const [goHome, setGoHome] = useState(false);

  useEffect(() => {
    if (color.length === 3 || color.length === 6) {
      setGoHome(false);
    } else if (color.length !== 3 || color.length !== 6) {
      setGoHome(true);
    }
  }, []);

  useEffect(() => {
    if (goHome) {
      return navigate("/colors");
    }
  }, [goHome]);

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
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
}

export default Color;
