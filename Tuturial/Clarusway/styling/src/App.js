import logo from "./logo.svg";
import "./App.css";
import { Inline } from "./components/inline/Inline.js";
import Objectinline from "./components/inline/Objectinline";

function App() {
  return (
    <div className="App">
      <h1>ozkan condek</h1>
      <Inline />
      <Objectinline />
    </div>
  );
}

export default App;
