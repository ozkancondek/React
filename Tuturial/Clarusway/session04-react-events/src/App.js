import "./App.css";
import { AddEvent } from "./components/addEventClass/AddEvent";
import AddEventClass from "./components/addEventClass/AddEventClass";

const alertNowProp = () => {
  alert("You clicked to button with prop method");
};

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      <AddEvent sendFunc={alertNowProp} />
      <AddEventClass />
    </div>
  );
}

export default App;
