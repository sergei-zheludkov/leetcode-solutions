import { checkPalindrome } from '../helpers/check-palindrome';

export const countSubstrings = (str: string): number => {
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
};

// PREVIOUS SOLUTIONS
//
// export const countSubstrings = (str: string): number => {
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
//           switcher = false;
//           break;
//         }
//       }
//
//       if (switcher) {
//         count += 1;
//       }
//     }
//   }
//
//   return count;
// };
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
// export const countSubstrings = (str: string): number => {
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
// };
