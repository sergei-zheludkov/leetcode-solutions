export const productExceptSelf = (nums: number[]): number[] => {
  const result: number[] = new Array(nums.length).fill(1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
};

// PREV SOLUTION

// export const productExceptSelf = (nums: number[]): number[] => {
//   const result: number[] = [];
//
//   for (let i = 0; i < nums.length; i++) {
//     const [item] = nums.splice(i, 1);
//
//     result.push(eval(nums.join('*')));
//
//     nums.splice(i, 0, item);
//   }
//
//   return result;
// };
