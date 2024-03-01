import { isPalindrome } from './valid-palindrome';

describe(('valid palindrome'), () => {
  test.each(['', ' ' ,'a', 'A man, a plan, a canal: Panama'])('truthy cases', (str) => {
    expect(isPalindrome(str)).toBeTruthy();
  });

  test.each(['race a car', '0P', '0O'])('falsy cases', (str) => {
    expect(isPalindrome(str)).toBeFalsy();
  });
});
