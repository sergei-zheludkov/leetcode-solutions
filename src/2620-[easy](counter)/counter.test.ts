import { createCounter } from './counter';

describe('counter', () => {
  test('first case', () => {
    const counter = createCounter(10);

    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
  });

  test('second case', () => {
    const counter = createCounter(-2);

    expect(counter()).toBe(-2);
    expect(counter()).toBe(-1);
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });
});
