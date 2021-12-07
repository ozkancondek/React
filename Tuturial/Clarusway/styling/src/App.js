import logo from "./logo.svg";
import "./App.css";
import { Inline } from "./components/inline/Inline.js";
import Objectinline from "./components/inline/Objectinline";
import { Stylesheet } from "./components/inline/Stylesheet";
import StyleSheet2 from "./components/inline/regular-style/StyleSheet2";
import Sassy from "./components/inline/sassy/Sassy";

function App() {
  return (
    <div className="App">
      <h1>ozkan condek</h1>
      <Inline />
      <Objectinline />
      <Stylesheet />
      <StyleSheet2 cond={false} pcolor="primary" />
      <Sassy />
    </div>
  );
}

export default App;
