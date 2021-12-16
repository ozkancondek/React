import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import StyledComponents from "./components/styled-comp/StyledComponents";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";
import StyledButton from "./components/material-ui/styled-button/StyledButton";
import { createTheme } from "@mui/material";
import { orange, green } from "@mui/material/colors";
import { ThemeProvider } from "@mui/styles";
import AppBarComp from "./components/material-ui/app-bar/AppBarComp";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[400],
      },
      secondary: {
        main: green[300],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBarComp />
      <div className="App">
        <header className="App-header">
          {/*   <StyledComponents /> */}
          <Buttons />
          <CheckBoxComp />
          <TextFieldComp />
          <br />
          <StyledButton />
        </header>
      </div>
    </ThemeProvider>
  );
}
export default App;
