import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { data } from "./data.js";
import Cities from "./components/Cities";
import ProtoTypes from "proto-types";

function App() {
  return (
    <div className="App">
      <Header />
      <Cities cities={data} />
    </div>
  );
}

export default App;
