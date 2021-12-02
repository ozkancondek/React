import "./App.css";
import ChategoryList from "./ChategoryList";
import Navy from "./Navy";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    // jsx
    //this div here is not exactly like in html. Its jsx
    <div className="App">
      <Container>
        <Row>
          <Navy></Navy> {/* add navy to here  */}
        </Row>
        <Row>
          <Col xs="3">
            {" "}
            <ChategoryList></ChategoryList>
          </Col>
          <Col xs="9">
            {" "}
            <ProductList></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
    // this is not allowed because it needs to contain container. <h3>Try Line</h3>
  );
}

export default App;
