import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import StyledComponents from "./components/styled-comp/StyledComponents";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/*   <StyledComponents /> */}
          <Buttons />
          <CheckBoxComp />
        </header>
      </div>
    </>
  );
}
export default App;
