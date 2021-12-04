import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class ChategoryList extends Component {
  state = {
    categories: [],
    /*  categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ], */
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => this.setState({ categories: json }));
  };
  /*  showCategory = (e) => {
    this.setState({ currentCategory: e.categoryName });
  }; => move it to App.js */
  /*  } */
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.id}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h2>{this.props.currentCategory}</h2>

        {/* <ListGroup flush>
          <ListGroupItem disabled href="#" tag="a">
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem href="#" tag="a">
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem href="#" tag="a">
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem href="#" tag="a">
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem href="#" tag="a">
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup> */}
      </div>
    );
  }
}
