import Big from 'big.js';

const operate = (firstNumber, secondNumber, operator) => {
  const num1 = Big(firstNumber);
  const num2 = Big(secondNumber);
  if (operator === '+') {
    return num1.plus(num2).toString();
  }
  if (operator === '-') {
    return num1.minus(num2).toString();
  }
  if (operator === 'x') {
    return num1.times(num2).toString();
  }
  if (operator === '÷') {
    try {
      return num1.div(num2).toString();
    } catch (err) {
      return 'Error';
    }
  }
  if (operator === '%') {
    try {
      return num1.mod(num2).toString();
    } catch (err) {
      return 'Error';
    }
  }
  throw Error('Error');
};

export default operate;
