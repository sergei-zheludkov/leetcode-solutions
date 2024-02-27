import { checkPalindrome } from '../helpers/check-palindrome';

export const longestPalindrome = (str: string): string => {
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
};

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
