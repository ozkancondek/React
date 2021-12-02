import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent />
        <FuncComp />
      </header>
    </div>
  );
}
export default App;
