
export const hammingWeight = (n: number): number => {
  let count = 0;

  while (n !== 0) {
    count++;
    n &= (n - 1);
  }

  return count;
};

// PREVIOUS SOLUTION

// const hammingWeight = (n: number): number => {
//   let count = 0;
//   let index = 31;
//
//   while (index) {
//     if (n >> index & 1) {
//       count += 1
//     }
//     index--
//   }
//
//   return count;
// }
