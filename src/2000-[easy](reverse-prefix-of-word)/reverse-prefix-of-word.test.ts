import { reversePrefix } from './reverse-prefix-of-word';

test.each([
  { word: 'abcdefd', ch: 'd', expected: 'dcbaefd' },
  { word: 'xyxzxe', ch: 'z', expected: 'zxyxxe' },
  { word: 'abcd', ch: 'z', expected: 'abcd' },
])('reverse prefix of word', ({ word, ch, expected }) => {
  expect(reversePrefix(word, ch)).toBe(expected);
});
