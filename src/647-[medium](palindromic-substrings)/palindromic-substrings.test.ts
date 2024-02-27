import { countSubstrings } from './palindromic-substrings';

test('palindromic substrings', () => {
  expect(countSubstrings('abc')).toBe(3);
  expect(countSubstrings('aaa')).toBe(6);
  expect(countSubstrings('aabc')).toBe(5);
  expect(countSubstrings('aabccd')).toBe(8);
  expect(countSubstrings('aabccdaa')).toBe(11);
  expect(countSubstrings('aabccdaaa')).toBe(14);
  expect(countSubstrings('abaaba')).toBe(11);
  expect(countSubstrings('abanmaba')).toBe(10);
});
