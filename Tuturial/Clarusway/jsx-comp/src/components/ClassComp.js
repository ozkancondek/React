import React from "react";
class ClassComp extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to ReactJS-ClassComp</h1>
        <p>Age:{this.props.x}</p>
      </div>
    );
  }
}
export default ClassComp;
