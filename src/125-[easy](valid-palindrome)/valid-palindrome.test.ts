import { isPalindrome } from './valid-palindrome';

describe(('valid palindrome'), () => {
  test('truthy cases', () => {
    expect(isPalindrome('')).toBeTruthy();
    expect(isPalindrome(' ')).toBeTruthy();
    expect(isPalindrome('a')).toBeTruthy();
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(isPalindrome('race a car')).toBeFalsy();
    expect(isPalindrome('0P')).toBeFalsy();
    expect(isPalindrome('0O')).toBeFalsy();
  });
});
