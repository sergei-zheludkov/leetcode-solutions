import { countConsistentStrings } from './count-the-number-of-consistent-strings';

test.each([
  { words: ['ad','bd','aaab','baa','badab'], allowed: 'ab', expected: 2 },
  { words: ['ad','bd','aaab','baa','badab'], allowed: 'xyz', expected: 0 },
  { words: ['a','b','c','ab','ac','bc','abc'], allowed: 'abc', expected: 7 },
  { words: ['cc','acd','b','ba','bac','bad','ac','d'], allowed: 'cad', expected: 4 },
])('count the number of consistent strings', ({ allowed, words, expected }) => {
  expect(countConsistentStrings(allowed, words)).toBe(expected);
});
