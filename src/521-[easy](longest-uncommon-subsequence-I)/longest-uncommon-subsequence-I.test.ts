import { findLUSlength } from './longest-uncommon-subsequence-I';

test.each([
  { a: 'aba', b: 'cdc', expected: 3 },
  { a: 'aaa', b: 'bbb', expected: 3 },
  { a: 'aaa', b: 'aaa', expected: -1 },
  { a: 'abcdefg', b: 'efgabcd', expected: 7 },
  { a: 'abcdefg', b: 'xbceefh', expected: 7 },
  { a: 'aaabbbccccgggg', b: 'xxxbbbyyyygggg', expected: 14 },
  { a: 'aefawfawfawfaw', b: 'aefawfeawfwafwaef', expected: 17 },
  { a: 'aefawfeawfwafwaef', b: 'aefawfawfawfaw', expected: 17 },
])('longest uncommon subsequence I', ({ a, b, expected }) => {
  expect(findLUSlength(a, b)).toBe(expected);
});
