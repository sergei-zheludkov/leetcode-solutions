import { commonFactors } from './number-of-common-factors';

test.each([
  { a: 12, b: 6, expected: 4 },
  { a: 13, b: 17, expected: 1 },
  { a: 25, b: 30, expected: 2 },
  { a: 200, b: 500, expected: 9 },
  { a: 325, b: 575, expected: 3 },
  { a: 1000, b: 500, expected: 12 },
  { a: 1000, b: 1000, expected: 16 },
])('number of common factors', ({ a, b, expected }) => {
  expect(commonFactors(a,b)).toBe(expected);
});