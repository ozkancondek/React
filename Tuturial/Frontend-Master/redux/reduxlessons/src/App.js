import "./App.css";
import { Counter } from "./Counter";

import { Redux1 } from "./frontendmasterd/Redux1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        redux lessons
        {/* <Redux1></Redux1> */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
