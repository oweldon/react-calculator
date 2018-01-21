import React, {Component} from 'react';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
              sum: 0
      }

      this.createTotal = this.createTotal.bind(this);
      this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e){
      let newNum = parseInt(e.target.value);

      this.setState({[e.target.name]: newNum });
    }

  createTotal(event){
    event.preventDefault();
    
    let num1 = this.state.num1;
    let num2 = this.state.num2 ;
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return(
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
            <form onSubmit={this.createTotal}>
              <input type="number" name="num1" onChange={this.handleChange} />
              <span>+</span>
              <input type="number" name="num2" onChange={this.handleChange} />
              <input type="submit" value="=" />
            </form>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}


export default Calculator
