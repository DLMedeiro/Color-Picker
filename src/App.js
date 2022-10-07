import "./App.css";
import { Routes, Route } from "react-router-dom";
import ColorList from "./ColorList.js";
import Color from "./Color.js";

function App() {
  return (
    <div className="App">
      {/* <nav>
        <Nav />
      </nav> */}
      <div>
        <Routes>
          <Route path="/" element={<ColorList />}></Route>
          <Route path="/colors/:color" element={<Color />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
