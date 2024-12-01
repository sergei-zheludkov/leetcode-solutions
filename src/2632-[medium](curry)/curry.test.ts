import { curry, FC } from './curry';

const sum = (a: number, b: number, c: number) => a + b + c;
const multiply = (a: number, b: number, c: number, d: number) => a * b * c * d;

describe('curry', () => {
  const curriedSum = curry(sum);
  const curriedMultiply = curry(multiply);

  test.each([
    { inputs: [[1], [2], [3]], expected: 6 },
    { inputs: [[1,2], [3]], expected: 6 },
    { inputs: [[], [], [1,2,3]], expected: 6 },
  ])('sum', ({ inputs, expected }) => {
    let callback: FC | number = curriedSum;

    inputs.forEach((elem) => {
      callback = typeof callback === 'number' ? callback : callback(...elem);
    });

    console.log(callback.valueOf());

    expect(callback.valueOf()).toBe(expected);
  });

  test.each([
    { inputs: [[1], [2], [3], [2]], expected: 12 },
    { inputs: [[2], [4], [5], [5]], expected: 200 },
    { inputs: [[], [5,5], [4,2], []], expected: 200 },
  ])('multiply', ({ inputs, expected }) => {
    let callback: FC | number = curriedMultiply;

    inputs.forEach((elem) => {
      callback = typeof callback === 'number' ? callback : callback(...elem);
    });

    console.log(callback.valueOf());

    expect(callback).toBe(expected);
  });
});
