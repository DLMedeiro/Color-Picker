import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList.js";
import Color from "./Color.js";

function App() {
  return (
    <div className="test">
      <div className="test">
        <Routes>
          <Route path="/colors" element={<ColorList />}></Route>
          <Route path="/colors/:color" element={<Color />}></Route>
          <Route path="*" element={<Navigate to="/colors" replace />}></Route>
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
