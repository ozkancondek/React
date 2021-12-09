import React from 'react'

class ClassComponent extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount() {
    /*first render situation. What do you want to in first render? */
    console.log('Class Comp Mounted')
  }
  componentDidUpdate() {
    console.log('Comp Updated')
  }
  componentWillUnmount() {
    console.log('Class Comp Unmoted')
  }
  render() {
    return (
      <div className="class">
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
      </div>
    )
  }
}

export default ClassComponent
