import logo from "./logo.svg";
import "./App.css";
import Navi from "./comp-1/Navi";

import { Container } from "react-bootstrap";
import Body from "./comp-1/Body";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Navi />
      <Body />
    </div>
  );
}

export default App;
