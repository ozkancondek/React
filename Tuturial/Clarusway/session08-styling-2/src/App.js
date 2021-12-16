import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import StyledComponents from "./components/styled-comp/StyledComponents";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/*   <StyledComponents /> */}
          <Buttons />
          <CheckBoxComp />
          <TextFieldComp />
        </header>
      </div>
    </>
  );
}
export default App;
