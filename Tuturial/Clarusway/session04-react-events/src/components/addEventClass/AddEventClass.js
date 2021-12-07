import React, { Component } from "react";

export default class AddEventClass extends Component {
  alertNow() {
    alert("You clicked to button with class method");
  }
  render() {
    return (
      <div>
        <h3>Class method</h3>
        <div>
          <button onClick={this.alertNow}>Click</button>
        </div>
      </div>
    );
  }
}
