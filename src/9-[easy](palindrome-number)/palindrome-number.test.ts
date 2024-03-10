import { isPalindrome } from './palindrome-number';

describe('palindrome number', () => {
  test.each([0, 121, 11, 1221])('true cases', (num) => {
    expect(isPalindrome(num)).toBeTruthy();
  });
  test.each([-123, 10, 104, -121, 123])('false cases', (num) => {
    expect(isPalindrome(num)).toBeFalsy();
  });
});

