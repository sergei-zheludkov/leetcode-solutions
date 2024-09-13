import { getLucky } from './sum-of-digits-of-string-after-convert';

test.each([
  { s: 'a', k: 5, expected: 1 },
  { s: 'iiii', k: 1, expected: 36 },
  { s: 'zbax', k: 2, expected: 8 },
  { s: 'leetcode', k: 2, expected: 6 },
  { s: 'kukarekusuka', k: 4, expected: 7 },
])('sum of digits of string after convert', ({ s, k, expected }) => {
  expect(getLucky(s, k)).toBe(expected);
});
