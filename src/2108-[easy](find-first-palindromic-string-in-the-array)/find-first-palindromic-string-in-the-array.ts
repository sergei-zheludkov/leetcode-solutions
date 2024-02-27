import { checkPalindrome } from '../helpers/check-palindrome';

export const firstPalindrome = (words: string[]): string => {
  for (const word of words) {
    if (checkPalindrome(word)) {
      return word;
    }
  }

  return '';
};

// PREV SOLUTION

// export const firstPalindrome = (words: string[]): string => {
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
