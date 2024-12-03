import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

test.each([
  { str: 'abcabcbb', expected: 3 },
  { str: 'bbbbb', expected: 1 },
  { str: 'pwwkew', expected: 3 },
  { str: 'whatthefuck', expected: 7 },
  { str: 'bbbbbwhatthefuck', expected: 7 },
])('longest substring without repeating characters', ({ str, expected }) => {

  expect(lengthOfLongestSubstring(str)).toEqual(expected);
});
