import React, { Component } from "react";
import { CardBody, CardGroup, Card, CardText } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {/* <h3>{this.props.info.second}</h3> */}
        {/*  call from info object */}

        <CardGroup>
          <Card>
            <CardBody>
              <CardText>This is a comment of this post</CardText>
              <CardText>{this.props.}</CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
