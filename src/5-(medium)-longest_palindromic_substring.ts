// link to problem: https://leetcode.com/problems/longest-palindromic-substring

import { checkPalindrome } from "./helpers/check-palindrome";

const test1_str = "abc";
const test2_str = "aaa";
const test3_str = "aabc";
const test4_str = "aabccd";
const test5_str = "aabccdaa";
const test6_str = "aabccdaaa";
const test7_str = "abaaba";
const test8_str = "abanmaba";
const test9_str = "babad"
const test10_str = "aacabdkacaa"
const test11_str = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

function longestPalindrome(str: string): string {
  let result = '';

  if (checkPalindrome(str)) {
    return str;
  }

  for (let strIndex = 0; strIndex < str.length; strIndex++) {
    for (let subIndex = 0; subIndex <= str.length; subIndex++) {
      const partForCheck = str.substring(strIndex, strIndex + subIndex);
      const isLonger = partForCheck.length > result.length;

      if (isLonger && checkPalindrome(partForCheck)) {
        result = partForCheck;
      }
    }
  }

  return result;
}

// PREV SOLUTIONS

// function longestPalindrome(str: string): string {
//   let result = '';
//
//
//   for (let strIndex = 0; strIndex < str.length; strIndex++) {
//     for (let subIndex = 0; subIndex <= str.length; subIndex++) {
//       const partForCheck = str.substring(strIndex, strIndex + subIndex);
//
//       let switcher = true;
//
//       for (let step = 0; step < (partForCheck.length - 1) / 2; step++) {
//         const first = partForCheck[step];
//         const last = partForCheck[partForCheck.length - 1 - step];
//
//         if (first !== last) {
//           switcher = false
//           break;
//         }
//       }
//
//       if (switcher && partForCheck.length > result.length) {
//         result = partForCheck;
//       }
//     }
//   }
//
//   return result;
// }

// function longestPalindrome(str: string): string {
//   let result = '';
//
//   for (let strIndex = 0; strIndex < str.length; strIndex++) {
//     for (let subIndex = 0; subIndex <= str.length; subIndex++) {
//       const partForCheck = str.substring(strIndex, strIndex + subIndex);
//
//       let reversed = ""
//
//       for (let rvrIndex = 0; rvrIndex < partForCheck.length; rvrIndex++) {
//         reversed = `${partForCheck[rvrIndex]}${reversed}`;
//       }
//
//       if (reversed === partForCheck && partForCheck.length > result.length) {
//         result = partForCheck;
//       }
//     }
//   }
//
//   return result;
// }

console.log(`test 1: \n EXPECTED: a \n OUTPUT: ${longestPalindrome(test1_str)}`);
console.log(`test 2: \n EXPECTED: aaa \n OUTPUT: ${longestPalindrome(test2_str)}`);
console.log(`test 3: \n EXPECTED: aa \n OUTPUT: ${longestPalindrome(test3_str)}`);
console.log(`test 4: \n EXPECTED: aa \n OUTPUT: ${longestPalindrome(test4_str)}`);
console.log(`test 5: \n EXPECTED: aa \n OUTPUT: ${longestPalindrome(test5_str)}`);
console.log(`test 6: \n EXPECTED: aaa \n OUTPUT: ${longestPalindrome(test6_str)}`);
console.log(`test 7: \n EXPECTED: abaaba \n OUTPUT: ${longestPalindrome(test7_str)}`);
console.log(`test 8: \n EXPECTED: aba \n OUTPUT: ${longestPalindrome(test8_str)}`);
console.log(`test 9: \n EXPECTED: bab \n OUTPUT: ${longestPalindrome(test9_str)}`);
console.log(`test 10: \n EXPECTED: aca \n OUTPUT: ${longestPalindrome(test10_str)}`);
console.log(`test 10: \n EXPECTED:  \n OUTPUT: ${longestPalindrome(test11_str)}`);

