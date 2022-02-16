import operate from './operate';

const isNumber = (key) => !!key.match(/[0-9]+/);

const calculate = (obj, buttonName) => {
  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.nextValue === '0') {
      return {};
    }

    // When a an operator is clicked, update the nextValue
    if (obj.operator) {
      if (obj.nextValue) {
        return { ...obj, nextValue: obj.nextValue + buttonName };
      }
      return { ...obj, nextValue: buttonName };
    }

    // If the operator isn't clicked, update the nextValue and clear the value
    if (obj.nextValue) {
      return {
        nextValue: obj.nextValue + buttonName,
        currentValue: '',
      };
    }
    return {
      nextValue: buttonName,
      currentValue: '',
    };
  }

  if (buttonName === '.') {
    if (obj.nextValue) {
      if (obj.nextValue.includes('.')) {
        return { ...obj };
      }
      return { ...obj, nextValue: `${obj.nextValue}.` };
    }
    if (obj.operator) {
      return { nextValue: '0.' };
    }
    if (obj.currentValue) {
      if (obj.currentValue.includes('.')) {
        return {};
      }
      return { currentValue: `${obj.currentValue}.` };
    }
    return { currentValue: '0.' };
  }

  // When user clicks the equal operator
  if (buttonName === '=') {
    if (obj.nextValue && obj.operator) {
      return {
        currentValue: operate(obj.currentValue, obj.nextValue, obj.operator),
        nextValue: '',
        operator: '',
      };
    }
    return {};
  }

  // For reseting the value to zaro
  if (buttonName === 'AC') {
    return {
      currentValue: '',
      operator: '',
      nextValue: '',
    };
  }

  // For changing the value from positive to negative or vise versa
  if (buttonName === '+/-') {
    if (obj.currentValue) {
      return { ...obj, currentValue: (-1 * parseFloat(obj.currentValue)).toString() };
    }
    if (obj.nextValue) {
      return { ...obj, nextValue: (-1 * parseFloat(obj.nextValue)).toString() };
    }
    return {};
  }

  // User clicks an operator without having pressing equal button
  if (!obj.nextValue && obj.currentValue && !obj.operator) {
    return { ...obj, operator: buttonName };
  }

  // User clicked an operator and there is an existing operator
  if (obj.operator) {
    if (obj.currentValue && !obj.nextValue) {
      return { ...obj, operator: buttonName };
    }

    return {
      currentValue: operate(obj.currentValue, obj.nextValue, obj.operator),
      nextValue: '',
      operator: buttonName,
    };
  }

  if (!obj.nextValue) {
    return { operator: buttonName };
  }

  return {
    currentValue: obj.nextValue,
    nextValue: '',
    operator: buttonName,
  };
};

export default calculate;
