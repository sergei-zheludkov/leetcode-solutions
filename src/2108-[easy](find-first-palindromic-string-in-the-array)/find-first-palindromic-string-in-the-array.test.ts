import { firstPalindrome } from './find-first-palindromic-string-in-the-array';

test.each([
  { words: ['abc','car','ada','racecar','cool'], expected: 'ada' },
  { words: ['notapalindrome','racecar'], expected: 'racecar' },
  { words: ['def','ghi'], expected: '' },
])('find first palindromic string in the array', ({ words, expected }) => {
  expect(firstPalindrome(words)).toBe(expected);
});
