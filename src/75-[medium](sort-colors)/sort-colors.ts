export const sortColors = (nums: number[]): void => {
  let ind = 0;
  let left = 0;
  let right = nums.length - 1;

  const swap = (i: number, j: number) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };

  while (ind <= right) {
    if (nums[ind] === 0) {
      swap(left, ind);
      left++;
    } else if (nums[ind] === 2) {
      swap(ind, right);
      right--;
      ind--;
    }
    ind++;
  }
};

// PREVIOUS SOLUTION
//
// export const sortColors = (nums: number[]): void => {
//   let i = 0;
//
//   while (i < nums.length) {
//     let j = 0;
//
//     while (j < nums.length) {
//       const left = nums[i];
//       const right = nums[j];
//
//       if (right > left) {
//         nums[i] = right;
//         nums[j] = left;
//       }
//       j++;
//     }
//     i++;
//   }
// };