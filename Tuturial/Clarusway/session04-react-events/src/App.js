import "./App.css";
import { AddEvent } from "./components/addEventClass/AddEvent";
import AddEventClass from "./components/addEventClass/AddEventClass";
import EventBind from "./components/eventBinding/EventBind";

const alertNowProp = () => {
  alert("You clicked to button with prop method");
};

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      <AddEvent sendFunc={alertNowProp} />
      <AddEventClass />
      <EventBind />
    </div>
  );
}

export default App;
