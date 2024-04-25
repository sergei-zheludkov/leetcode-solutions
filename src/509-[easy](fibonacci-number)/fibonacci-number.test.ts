import { fib } from './fibonacci-number';

test.each([
  { num: 0, expected: 0 },
  { num: 2, expected: 1 },
  { num: 3, expected: 2 },
  { num: 4, expected: 3 },
  { num: 10, expected: 55 },
  { num: 15, expected: 610 },
  { num: 22, expected: 17711 },
])('fibonacci number', ({ num, expected }) => {
  expect(fib(num)).toBe(expected);
});