import logo from "./logo.svg";
import "./App.css";
import { Inline } from "./components/inline/Inline.js";
import Objectinline from "./components/inline/Objectinline";
import { Stylesheet } from "./components/inline/Stylesheet";

function App() {
  return (
    <div className="App">
      <h1>ozkan condek</h1>
      <Inline />
      <Objectinline />
      <Stylesheet />
    </div>
  );
}

export default App;
