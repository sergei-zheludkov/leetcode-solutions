import { countPrefixSuffixPairs } from './count-prefix-and-suffix-pairs-I';

test.each([
  { words: ['abab','ab'], expected: 0 },
  { words: ['pa','pa','ma','ma'], expected: 2 },
  { words: ['a','aba','ababa','aa'], expected: 4 },
  { words: ['pa','papa','ma','mama'], expected: 2 },
])('count prefix and suffix pairs I', ({ words, expected }) => {
  expect(countPrefixSuffixPairs(words)).toBe(expected);
});
