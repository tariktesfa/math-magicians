import React, { useState } from 'react';
import './Calculator.css';
import Calculate from '../logic/Calculate';

const Calculator = () => {
  const [data, setData] = useState({
    currentValue: 0,
    operator: '',
    nextValue: '',
  });

  const handleClick = (e) => {
    const result = Calculate(data, e.target.textContent);
    setData(result);
  };

  const display = `${data.currentValue || data.operator || data.nextValue ? `${data.currentValue || ''} ${data.operator || ''} ${data.nextValue || ''}` : '0'} `;
  const keyArray = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
    .map((keys) => <button type="button" className="button" key={keys} id={keys} onClick={handleClick}>{keys}</button>);

  return (
    <div className="container">
      <div className="text"><h3>Let us do some Maths!!</h3></div>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="button-keys">{keyArray}</div>
      </div>
    </div>
  );
};

export default Calculator;
