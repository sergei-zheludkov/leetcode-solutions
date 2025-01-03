import { fib } from '../509-[easy](fibonacci-number)/fibonacci-number';
import { sum } from '../2235-[easy](add-two-integers)/add-two-integers';
import { factorial } from '../helpers/factorial';
import { memoize } from './memoize';

describe('memoize', () => {
  let callCount: number;

  beforeEach(() => {
    callCount = 0;
  });

  test('sum case 1', () => {
    const memoizedFn = memoize((a, b) => {
      callCount += 1;
      return sum(a, b);
    });

    expect(memoizedFn(2, 2)).toBe(4);
    expect(memoizedFn(2, 2)).toBe(4);
    expect(callCount).toBe(1);
    expect(memoizedFn(2, 3)).toBe(5);
    expect(callCount).toBe(2);
  });

  test('sum case 2', () => {
    const memoizedFn = memoize((a, b) => {
      callCount += 1;
      return sum(a, b);
    });

    expect(memoizedFn(0, 0)).toBe(0);
    expect(memoizedFn(0, 0)).toBe(0);
    expect(callCount).toBe(1);
  });

  test('factorial', () => {
    const memoizedFn = memoize((n) => {
      callCount += 1;
      return factorial(n);
    });

    expect(memoizedFn(2)).toBe(2);
    expect(memoizedFn(3)).toBe(6);
    expect(memoizedFn(2)).toBe(2);
    expect(callCount).toBe(2);
    expect(memoizedFn(3)).toBe(6);
    expect(callCount).toBe(2);
  });

  test('fib', () => {
    const memoizedFn = memoize((n) => {
      callCount += 1;
      return fib(n);
    });

    expect(memoizedFn(10)).toBe(55);
    expect(callCount).toBe(1);
  });
});
