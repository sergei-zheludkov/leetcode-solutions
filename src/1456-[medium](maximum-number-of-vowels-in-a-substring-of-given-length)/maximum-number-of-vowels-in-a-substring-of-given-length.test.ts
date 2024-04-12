import { maxVowels } from './maximum-number-of-vowels-in-a-substring-of-given-length';

test.each([
  { str: 'abciiidef', k: 3, expected: 3 },
  { str: 'aeiou', k: 2, expected: 2 },
  { str: 'leetcode', k: 3, expected: 2 },
  { str: 'prolongation', k: 3, expected: 2 },
  { str: 'substitution', k: 3, expected: 2 },
  { str: 'bcdfghlkmnpqrst', k: 3, expected: 0 },
  { str: 'ibpbhixfiouhdljnjfflpapptrxgcomvnb', k: 33, expected: 7 },
])('maximum number of vowels in a substring of given length', ({ str, k, expected }) => {
  expect(maxVowels(str,k)).toBe(expected);
});
