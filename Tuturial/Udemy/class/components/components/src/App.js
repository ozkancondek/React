import "./App.css";

import React, { Component } from "react";
import ChategoryList from "./ChategoryList";
import Navy from "./Navy";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import FreeLine from "./FreeLine";

/* change it to calass component first to data transfer between components*/

//I want to carry   showCategory() function to App.js

export default class App extends Component {
  state = { currentCategory: "" };
  changeCategory = (e) => {
    this.setState({ currentCategory: e.categoryName });
  };
  render() {
    let prductInfo = { title: "Product List", second: "second Line" };
    let categoryInfo = { title: "Category List" };
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
              <ChategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></ChategoryList>
            </Col>
            <Col xs="9">
              {" "}
              <ProductList
                currentCategory={this.state.currentCategory}
                info={prductInfo}
              ></ProductList>
            </Col>
          </Row>
          <Row>
            <FreeLine />
          </Row>
        </Container>
      </div>
      // this is not allowed because it needs to contain container. <h3>Try Line</h3>
    );
  }
}

//this is the first version with function component

// function App() {
//   let prductInfo = { title: "Product List", second: "second Line" };
//   let categoryInfo = { title: "Category List" };
//   return (
//     // jsx
//     //this div here is not exactly like in html. Its jsx
//     <div className="App">
//       <Container>
//         <Row>
//           <Navy></Navy> {/* add navy to here  */}
//         </Row>
//         <Row>
//           <Col xs="3">
//             {" "}
//             <ChategoryList info={categoryInfo}></ChategoryList>
//           </Col>
//           <Col xs="9">
//             {" "}
//             <ProductList info={prductInfo}></ProductList>
//           </Col>
//         </Row>
//         <Row>
//           <FreeLine />
//         </Row>
//       </Container>
//     </div>
//     // this is not allowed because it needs to contain container. <h3>Try Line</h3>
//   );
// }

// export default App;
