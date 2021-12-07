import { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "state message",
    };
    /*  this.handleClick=this.handleClick.bind(this) third method */
  }
  handleClick(name) {
    alert("you clicked to button");
    this.setState({ message: "You changed to message" + name });
    /*  its not possible to change it in function without bind */
  }
  /* fourth method   handleClick= (name) =>{
    alert("you clicked to button");
    this.setState({ message: "You changed to message" + name });
     
  } */
  render() {
    return (
      <div>
        {/**
         * 1. Binding in render method
         * 2. Binding in render method using arrow function
         * 3. Binding in the constructor
         * 4. Class property as an arrow function
         */}

        <h2>EventBinding</h2>
        <h3>first method</h3>
        {/* <button onClick={this.handleClick}>Click</button>  this is undefined now. I need to bind it*/}
        <button onClick={this.handleClick.bind(this)}>Click</button>

        <p style={{ backgrounColor: "aqua" }}>{this.state.message}</p>
        <h3>second method</h3>
        <button onClick={() => this.handleClick()}>Click</button>
        <p>send parameter to function</p>
        <button onClick={() => this.handleClick(" Jane")}>Click</button>

        <h3>third method</h3>
        {/*  make bind in constructor */}
        {/*  <button onClick={this.handleClick}>Click</button> */}
        <h3>fourth method</h3>
        {/*  define handleClick function with arrow method */}
        {/*  <button onClick={this.handleClick}>Click</button> */}
      </div>
    );
  }
}
