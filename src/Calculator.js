import React, {Component} from 'react';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      sum: 0,
      num1: "",
      num2: ""
   };
   this.addNum1 = this.addNum1.bind(this);
   this.addNum2 = this.addNum2.bind(this);
 }


 addNum1(event){
   let num =  Number(event.target.value)
   let temp =  Number(this.state.sum) + num
   this.setState({sum: temp, num1: num});
 }

  addNum2(event){
   let num =  Number(event.target.value)
   let temp =  Number(this.state.sum) + num
   this.setState({sum: temp, num2: num});
 }

  render() {
    return(
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
            <input type="number" value={this.state.num1} onChange={this.addNum1} />
            <span>+</span>
            <input type="number" value={this.state.num2} onChange={this.addNum2} />
            <input type="submit" value="=" />
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}


export default Calculator
