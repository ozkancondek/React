import "./App.css";
import ChategoryList from "./ChategoryList";
import Navy from "./Navy";
import ProductList from "./ProductList";

function App() {
  return (
    // jsx
    //this div here is not exactly like in html. Its jsx
    <div className="App">
      <Navy></Navy> {/* add navy to here  */}
      <ChategoryList></ChategoryList>
      <ProductList></ProductList>
    </div>
    // this is not allowed because it needs to contain container. <h3>Try Line</h3>
  );
}

export default App;
