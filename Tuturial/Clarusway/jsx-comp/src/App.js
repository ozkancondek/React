import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
import TryFile from "./components/TryFile";
function App() {
  const age = 25;
  const color = "red";
  const name = "ozkan";

  const surname = "condek";
  return (
    <div className="App">
      <header className="App-header">
        <h1> age : {age}</h1> {/* i can also use it in components */}
        <ClassComponent x={age} />
        <FuncComp y={age ** 2} z={color} />
        <TryFile name={name} surname={surname} />
      </header>
    </div>
  );
}
export default App;
