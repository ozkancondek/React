import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { data } from "./data.js";
import Cities from "./components/Cities";
import Inline from "./Tax.js";

/* import ProtoTypes from "proto-types"; */

let name = "irfan";

let name2 = (a, b) => {
  return a + b;
};

function App() {
  return (
    <div className="App">
      {/*  <Header />
      <Cities cities={data} /> */}
      <Inline isim={name} func={name2} isim3="irfan2" />
    </div>
  );
}

export default App;
