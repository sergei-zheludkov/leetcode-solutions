import { minimumLength } from './minimum-length-of-string-after-deleting-similar-ends';

test.each([
  { str: 'c', expected: 1 }, // => c
  { str: 'ca', expected: 2 }, // => ca
  { str: 'cabaabac', expected: 0 },
  { str: 'aabccabba', expected: 3 }, // => cca
  { str: 'cabaaabac', expected: 0 },
  { str: 'cabacabac', expected: 1 }, // => c
  { str: 'cababbabac', expected: 0 },
  { str: 'cababbbabac', expected: 0 },
  { str: 'ccbabbbabac', expected: 8 },
  { str: 'cababbabacccccc', expected: 0 },
])('minimum length of string after deleting similar ends', ({ str, expected }) => {
  expect(minimumLength(str)).toBe(expected);
});
