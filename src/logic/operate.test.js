import operate from './operate';

describe('Testing the calculator operations', () => {
  const obj = {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operate: ['+', '-', 'x', '÷', '%'],
  };

  test('adds x and y to equal 3', () => {
    expect(operate(obj.x[1], obj.y[2], obj.operate[0])).toEqual('3');
  });

  test('minus x and y to equal -1', () => {
    expect(operate(obj.x[1], obj.y[2], obj.operate[1])).toEqual('-1');
  });

  test('times x and y to equal 2', () => {
    expect(operate(obj.x[1], obj.y[2], obj.operate[2])).toEqual('2');
  });

  test('divides x and y to equal 0.5', () => {
    expect(operate(obj.x[1], obj.y[2], obj.operate[3])).toEqual('0.5');
  });

  test('should return error if y is less than 1 on division', () => {
    expect(operate(obj.x[1], obj.y[0], obj.operate[3])).toEqual('Error');
  });

  test('remainder x and y to equal 1', () => {
    expect(operate(obj.x[1], obj.y[2], obj.operate[4])).toEqual('1');
  });

  test('shoud return error if x and y is less than 1', () => {
    expect(operate(obj.x[0], obj.y[0], obj.operate[4])).toEqual('Error');
  });

  test('should return 0 if x is less than 1 and y is greater than 0', () => {
    expect(operate(obj.x[0], obj.y[1], obj.operate[4])).toEqual('0');
  });
});
