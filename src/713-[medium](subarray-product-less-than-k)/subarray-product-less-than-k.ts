export const numSubarrayProductLessThanK = (nums: number[], k: number): number => {
  let count = 0;
  let product = 1;
  let l = 0, r = 0;

  for (;r < nums.length; r++) {
    product *= nums[r];

    while (l <= r && product >= k) {
      product /= nums[l];
      l++;
    }

    count += (r - l + 1);
  }

  return count;
};


// export const numSubarrayProductLessThanK = (nums: number[], k: number): number => {
//   let size = 1;
//   let count = 0;
//
//   while (size <= nums.length) {
//     let left = 0;
//     let right = left + size;
//
//     while (right <= nums.length) {
//       let product = 1;
//
//       for (let i = left; i < right; i++) {
//         product *= nums[i];
//       }
//
//       if (product < k) {
//         count++;
//       }
//
//       left++;
//       right++;
//     }
//
//     size++;
//   }
//
//   return count;
// };
