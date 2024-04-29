import { reverseWords } from './reverse-words-in-a-string';

test.each([
  { str: '  hello world  ', expected: 'world hello' },
  { str: 'the sky is blue', expected: 'blue is sky the' },
  { str: 'a good   example', expected: 'example good a' },
  { str: '  R2D2   is  a  robot from  Star Wars', expected: 'Wars Star from robot a is R2D2' },
])('reverse words in a string', ({ str, expected }) => {
  expect(reverseWords(str)).toBe(expected);
});
