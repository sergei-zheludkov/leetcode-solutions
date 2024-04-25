import { clumsy } from './clumsy-factorial';

test.each([
  { num: 1, expected: 1 },
  { num: 2, expected: 2 },
  { num: 3, expected: 6 },
  { num: 4, expected: 7 },
  { num: 5, expected: 7 },
  { num: 6, expected: 8 },
  { num: 7, expected: 6 },
  { num: 8, expected: 9 },
  { num: 10, expected: 12 },
  { num: 12, expected: 13 },
  { num: 15, expected: 14 },
  { num: 20, expected: 21 },
  { num: 22, expected: 24 },
  { num: 23, expected: 22 },
  { num: 34, expected: 36 },
  { num: 41, expected: 43 },
])('clumsy factorial', ({ num, expected }) => {
  expect(clumsy(num)).toBe(expected);
});