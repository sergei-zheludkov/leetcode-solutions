export const findDuplicate = (nums: number[]): number | void => {
  let slow = 0, fast = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  let slow2 = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];

    if (slow === slow2) {
      return slow;
    }
  }
};


// export const findDuplicate = (nums: number[]): number | void => {
//   const collection: number[] = [];
//
//   let i = 0, j = nums.length - 1;
//
//   while (i <= j) {
//     if (collection[nums[i]]) {
//       return nums[i];
//     } else  {
//       collection[nums[i]] = nums[i];
//     }
//
//     if (collection[nums[j]]) {
//       return nums[j];
//     } else  {
//       collection[nums[j]] = nums[j];
//     }
//
//     i++;
//     j++;
//   }
// };
