import { firstPalindrome } from './find-first-palindromic-string-in-the-array';

test('find first palindromic string in the array', () => {
  expect(firstPalindrome(['abc','car','ada','racecar','cool'])).toBe('ada');
  expect(firstPalindrome(['notapalindrome','racecar'])).toBe('racecar');
  expect(firstPalindrome(['def','ghi'])).toBe('');
});
