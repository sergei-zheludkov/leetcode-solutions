// link to problem: https://leetcode.com/problems/find-first-palindromic-string-in-the-array

import { checkPalindrome } from "./helpers/check-palindrome";

const test1_words = ["abc","car","ada","racecar","cool"];
const test2_words = ["notapalindrome","racecar"];
const test3_words = ["def","ghi"];

function firstPalindrome(words: string[]): string {
  for (const word of words) {
    if (checkPalindrome(word)) {
      return word;
    }
  }

  return "";
}

// PREV SOLUTION

// function firstPalindrome(words: string[]): string {
//   for (const word of words) {
//     let reversed = "";
//
//     for (let index = 0; index < word.length; index++) {
//       reversed = `${word[index]}${reversed}`;
//     }
//
//     if (reversed === word) {
//       return word;
//     }
//   }
//
//   return "";
// }

console.log(`test1: \n EXPECTED: ada \n OUTPUT:`, firstPalindrome(test1_words));
console.log(`test2: \n EXPECTED: racecar \n OUTPUT:`, firstPalindrome(test2_words));
console.log(`test3: \n EXPECTED: "" \n OUTPUT:`, firstPalindrome(test3_words));

export { firstPalindrome };
