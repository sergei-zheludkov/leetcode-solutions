import { prefixCount } from './counting-words-with-a-given-prefix';

test.each([
  { words: ['leetcode','win','loops','success'], pref: 'code', expected: 0 },
  { words: ['pay','attention','practice','attend'], pref: 'at', expected: 2 },
])('counting words with a given prefix', ({ words, pref, expected }) => {
  expect(prefixCount(words, pref)).toBe(expected);
});
