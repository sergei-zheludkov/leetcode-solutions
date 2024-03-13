import { pivotInteger } from './find-the-pivot-integer';

test.each([
  { n: 8, expected: 6 },
  { n: 1, expected: 1 },
  { n: 4, expected: -1 },
])('find the pivot integer', ({ n, expected }) => {
  expect(pivotInteger(n)).toBe(expected);
});
