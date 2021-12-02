import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/* const myelement = <h1>I Love JSX!</h1>; 
 const myelement = <h1>React is {5 + 5} times better with JSX</h1>; 
  const myelement = <h1 className="myclass">Hello World</h1>;

ReactDOM.render(myelement, document.getElementById("root")); */

/* const myelement = React.createElement("h1", {}, "I do not use JSX!");

ReactDOM.render(myelement, document.getElementById("root"));
 */

reportWebVitals();
