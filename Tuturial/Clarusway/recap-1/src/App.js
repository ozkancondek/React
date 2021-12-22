import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Api } from "./pages/Api";

import { Welcome } from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      {/*  <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Api />
    </div>
  );
}

export default App;
