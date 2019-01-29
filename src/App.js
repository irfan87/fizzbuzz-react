import React, { Component } from 'react';

class App extends Component {
  
  getFizzBuzz() {
    for(let i = 0; i < 101; i++) {
      if(i % 15 === 0) {
        console.log("FizzBuzz");
      } else if(i % 3 === 0) {
        console.log("Fizz");
      } else if(i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  render() {
    return (
      <div>
        <h1>Welcome to FizzBuzz Challenge!</h1>
        <button onClick={this.getFizzBuzz}>Result</button>
      </div>
    );
  }
}

export default App;
