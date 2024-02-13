// link to problem: https://leetcode.com/problems/palindromic-substrings

import { checkPalindrome } from "./helpers/check-palindrome";

const test1_str = "abc";
const test2_str = "aaa";
const test3_str = "aabc";
const test4_str = "aabccd";
const test5_str = "aabccdaa";
const test6_str = "aabccdaaa";
const test7_str = "abaaba";
const test8_str = "abanmaba";

function countSubstrings(str: string): number {
  let count = 0;

  for (let ind = 0; ind < str.length; ind++) {
    for (let offset = 1; ind + offset <= str.length; offset++) {
      const partForCheck = str.substring(ind,  ind + offset);

      if (checkPalindrome(partForCheck)) {
        count += 1;
      }
    }
  }

  return count;
}

// PREVIOUS SOLUTIONS
//
// function countSubstrings(str: string): number {
//   let count = 0;
//
//   for (let ind = 0; ind < str.length; ind++) {
//     for (let offset = 1; ind + offset <= str.length; offset++) {
//       const checkStr = str.substring(ind,  ind + offset);
//
//       if (checkStr.length === 1) {
//         count += 1;
//         continue;
//       }
//
//       let switcher = true;
//
//       for (let step = 0; step < (checkStr.length - 1) / 2; step++) {
//         const first = checkStr[step];
//         const last = checkStr[checkStr.length - 1 - step];
//
//         if (first !== last) {
//           switcher = false
//           break;
//         }
//       }
//
//       if (switcher) {
//         count += 1
//       }
//     }
//   }
//
//   return count;
// }
// ----------------------------------------------------------------------
// const getTriangleNumber = (length: number): number => {
//   if (length === 1) {
//     return length;
//   }
//
//   return length + getTriangleNumber(length - 1);
// };
//
//
// function countSubstrings(str: string): number {
//   const [first, ...rest] = str.split('');
//
//   const combines = rest.reduce<string[]>((acc, letter) => {
//     const lastItem = acc.pop() || "";
//     const [accLetter] = lastItem.split('');
//
//     if (accLetter === letter) {
//       acc.push(`${lastItem}${letter}`);
//     } else {
//       acc.push(lastItem, letter);
//     }
//
//     return acc;
//   }, [first]);
//
//   return combines.reduce((acc, str) => {
//     return acc + getTriangleNumber(str.length);
//   }, 0);
// }

console.log(`test 1: \n Expected: 3 \n Output: ${countSubstrings(test1_str)}`);
console.log(`test 2: \n Expected: 6 \n Output: ${countSubstrings(test2_str)}`);
console.log(`test 3: \n Expected: 5 \n Output: ${countSubstrings(test3_str)}`);
console.log(`test 4: \n Expected: 8 \n Output: ${countSubstrings(test4_str)}`);
console.log(`test 5: \n Expected: 11 \n Output: ${countSubstrings(test5_str)}`);
console.log(`test 6: \n Expected: 14 \n Output: ${countSubstrings(test6_str)}`);
console.log(`test 7: \n Expected: 11 \n Output: ${countSubstrings(test7_str)}`);
console.log(`test 8: \n Expected: 10 \n Output: ${countSubstrings(test8_str)}`);

export { countSubstrings };

