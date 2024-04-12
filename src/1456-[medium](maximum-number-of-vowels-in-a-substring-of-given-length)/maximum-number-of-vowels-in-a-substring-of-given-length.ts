const vowels = ['a','e','i','o','u'];

export const maxVowels = (str: string, k: number): number => {
  let max = 0;
  let curr = 0;
  let i = 0;

  while (i < str.length) {
    if (vowels.includes(str[i-k])) {
      curr -= 1;
    }

    if (vowels.includes(str[i])) {
      curr += 1;
    }

    max = Math.max(curr, max);
    i++;
  }

  return max;
};

// export const maxVowels = (str: string, k: number): number => {
//   let max = 0;
//   let curr = 0;
//   let i = 0;
//
//   while (i < k) {
//     if (vowels.includes(str[i])) {
//       curr += 1;
//     }
//
//     i++;
//   }
//
//   max = curr;
//
//   while (i < str.length) {
//     if (vowels.includes(str[i-k])) {
//       curr -= 1;
//     }
//
//     if (vowels.includes(str[i])) {
//       curr += 1;
//     }
//
//     max = Math.max(curr, max);
//
//     i++;
//   }
//
//   return max;
// };