import { findNumbers } from './find-numbers-with-even-number-of-digits';

test.each([
  { array: [12,345,2,6,7896], expected: 2 },
  { array: [555,901,482,1771], expected: 1 },
])('find numbers with even number of digits', ({ array, expected }) => {
  expect(findNumbers(array)).toBe(expected);
});
