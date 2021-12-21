import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";

import { Welcome } from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
