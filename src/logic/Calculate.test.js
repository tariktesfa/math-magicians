import calculate from './Calculate';

describe('Testing Calculate', () => {
  test('First number check', () => {
    const obj = {
      currentValue: null,
      operator: null,
      nextValue: null,
    };
    const result = calculate(obj, '4');
    expect(result.nextValue).toEqual('4');
  });
  test('Operator click check', () => {
    const obj = {
      currentValue: null,
      operator: null,
      nextValue: 3,
    };
    const result = calculate(obj, 'x');
    expect(result.operator).toEqual('x');
  });
  test('Second number check', () => {
    const obj = {
      currentValue: 4,
      operator: 'x',
      nextValue: 8,
    };
    const result = calculate(obj, '=');
    expect(result.currentValue).toEqual('32');
  });
});
