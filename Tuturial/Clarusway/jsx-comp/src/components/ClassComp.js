import React from "react";
class ClassComp extends React.Component {
  state = { student: "ozkan" };
  state = { counter: 0 };
  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <h1>Welcome to ReactJS-ClassComp</h1>
        <p>Age:{this.props.x}</p>
        <p>Student:{this.state.student}</p>
        <p>Counter:{this.state.counter}</p>
        <button onClick={this.increaseCounter}>Increase</button>
        <button onClick={this.decreaseCounter}>Decrease</button>
      </div>
    );
  }
}
export default ClassComp;
