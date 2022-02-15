import React from 'react';
import './Calculator.css';
import Display from './Display';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const keyArray = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
      .map((keys) => <button type="submit" className="button" key={keys} id={keys}>{keys}</button>);

    return (
      <div className="calculator">
        <Display />
        <div className="button-keys">{keyArray}</div>
      </div>
    );
  }
}

export default Calculator;
