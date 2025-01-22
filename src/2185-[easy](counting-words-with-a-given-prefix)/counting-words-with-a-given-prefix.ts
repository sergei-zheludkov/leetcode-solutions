export const prefixCount = (words: string[], pref: string): number => {
  let res = 0;

  for (const word of words) {
    if (word.startsWith(pref)) {
      res++;
    }
  }

  return res;
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
