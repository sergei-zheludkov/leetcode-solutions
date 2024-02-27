import { createCounter } from './counter-II';

describe(('counter II'), () => {
  test('first case', () => {
    const counter = createCounter(5);

    expect(counter.increment()).toBe(6);
    expect(counter.reset()).toBe(5);
    expect(counter.decrement()).toBe(4);
  });

  test('second case', () => {
    const counter = createCounter(0);

    expect(counter.increment()).toBe(1);
    expect(counter.increment()).toBe(2);
    expect(counter.decrement()).toBe(1);
    expect(counter.reset()).toBe(0);
    expect(counter.reset()).toBe(0);
  });
});
