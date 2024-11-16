import { kthGrammar } from './k-th-symbol-in-grammar';

test.each([
  { n: 1, k: 1, expected: 0 },
  { n: 2, k: 1, expected: 0 },
  { n: 2, k: 2, expected: 1 },
  { n: 3, k: 4, expected: 0 },
  { n: 6, k: 21, expected: 0 },
  { n: 10, k: 15, expected: 1 },
  { n: 18, k: 30, expected: 0 },
  { n: 25, k: 30, expected: 0 },
  { n: 30, k: 45, expected: 1 },
  { n: 500, k: 5445, expected: 1 },
])('k th symbol in grammar', ({ n, k, expected }) => {
  expect(kthGrammar(n, k)).toBe(expected);
});
