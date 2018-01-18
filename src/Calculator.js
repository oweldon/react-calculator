import React, {Component} from 'react';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }
  render() {
    return(
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="text" />
          <span>+</span>
          <input type="text" />
          <span>=</span>
          <h3>{this.state.value}</h3>
        </div>
      </div>
    );
  }
}


export default Calculator
