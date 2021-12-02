import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
function App() {
  const age = 25;
  const color = "red";
  return (
    <div className="App">
      <header className="App-header">
        <h1> age : {age}</h1> {/* i can also use it in components */}
        <ClassComponent x={age} />
        <FuncComp y={age ** 2} z={color} />
      </header>
    </div>
  );
}
export default App;
