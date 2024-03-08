import { Calculator } from './calculator-with-method-chaining';

describe('calculator with method chaining', () => {
  test('add', () => {
    const calc = new Calculator(100);

    expect(calc.add(50).getResult()).toBe(150);
  });

  test('subtract', () => {
    const calc = new Calculator(99);

    expect(calc.subtract(9).getResult()).toBe(90);
  });

  test('multiply', () => {
    const calc = new Calculator(4);

    expect(calc.multiply(5).getResult()).toBe(20);
  });

  test('divide', () => {
    const calc = new Calculator(81);

    expect(calc.divide(9).getResult()).toBe(9);
  });

  test('power', () => {
    const calc = new Calculator(3);

    expect(calc.power(3).getResult()).toBe(27);
  });

  test('add and subtract', () => {
    const calc = new Calculator(10);

    expect(calc.add(5).subtract(7).getResult()).toBe(8);
  });

  test('multiply and power', () => {
    const calc = new Calculator(2);

    expect(calc.multiply(5).power(2).getResult()).toBe(100);
  });

  test('divide with error', () => {
    const calc = new Calculator(20);


    try {
      calc.divide(0).getResult();
    } catch (error) {
      expect(error).toBe('Division by zero is not allowed');
    }
  });
});
