import React from 'react';
import './Calculator.css';
import Calculate from '../logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: 0, operator: '', nextValue: '' };
  }

  HandleClick = (items) => this.setState((e) => Calculate(e, items.target.textContent));

  render() {
    const { currentValue, operator, nextValue } = this.state;
    const display = `${currentValue || operator || nextValue ? `${currentValue || ''} ${operator || ''} ${nextValue || ''}` : '0'} `;
    const keyArray = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
      .map((keys) => <button type="button" className="button" key={keys} id={keys} onClick={this.HandleClick}>{keys}</button>);

    return (
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="button-keys">{keyArray}</div>
      </div>
    );
  }
}

export default Calculator;
