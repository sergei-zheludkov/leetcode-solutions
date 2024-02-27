import { isPalindrome } from './palindrome-number';

describe('palindrome number', () => {
  test('true cases', () => {
    expect(isPalindrome(0)).toBeTruthy();
    expect(isPalindrome(121)).toBeTruthy();
    expect(isPalindrome(11)).toBeTruthy();
    expect(isPalindrome(1221)).toBeTruthy();
  });
  test('false cases', () => {
    expect(isPalindrome(-123)).toBeFalsy();
    expect(isPalindrome(10)).toBeFalsy();
    expect(isPalindrome(104)).toBeFalsy();
    expect(isPalindrome(-121)).toBeFalsy();
    expect(isPalindrome(123)).toBeFalsy();
  });
});

