export const increasingTriplet = (nums: number[]): boolean => {
  let n1 = Infinity, n2 = Infinity;

  for (const n of nums) {
    if (n > n2) {
      return true;
    }

    if (n > n1) {
      n2 = Math.min(n, n2);
    }

    n1 = Math.min(n, n1);
  }

  return false;
};

// export const increasingTriplet = (nums: number[]): boolean => {
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       if (nums[i] < nums[j]) {
//         for (let k = j + 1; k < nums.length; k++) {
//           if (nums[j] < nums[k]) {
//             return true;
//           }
//         }
//       }
//     }
//   }
//
//   return false;
// };