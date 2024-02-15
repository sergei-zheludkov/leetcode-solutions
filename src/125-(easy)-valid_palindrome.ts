// link to problem: https://leetcode.com/problems/valid-palindrome

import { checkPalindrome } from "./helpers/check-palindrome";

const test1_str = "A man, a plan, a canal: Panama";
const test2_str = "race a car";
const test3_str = " ";
const test4_str = "0P"

const isPalindrome = (str: string): boolean => {
  let lowerStr = '';

  for (let index = 0; index < str.length; index++) {
    const symb = str[index].toLowerCase();

    if (symb.match(/[a-z0-9]/i)) {
      lowerStr = `${lowerStr}${symb}`;
    }
  }

  return checkPalindrome(lowerStr);
};

console.log(`test1: \n EXPECTED: true \n OUTPUT:`, isPalindrome(test1_str));
console.log(`test2: \n EXPECTED: false \n OUTPUT:`, isPalindrome(test2_str));
console.log(`test3: \n EXPECTED: true \n OUTPUT:`, isPalindrome(test3_str));
console.log(`test4: \n EXPECTED: false \n OUTPUT:`, isPalindrome(test4_str));

export { isPalindrome };
