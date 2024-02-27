import { checkPalindrome } from '../helpers/check-palindrome';

export const isPalindrome = (str: string): boolean => {
  let lowerStr = '';

  for (let index = 0; index < str.length; index++) {
    const symb = str[index].toLowerCase();

    if (symb.match(/[a-z0-9]/i)) {
      lowerStr = `${lowerStr}${symb}`;
    }
  }

  return checkPalindrome(lowerStr);
};
