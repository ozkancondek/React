import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {/* <h3>{this.props.info.second}</h3> */}
        {/*  call from info object */}
      </div>
    );
  }
}
