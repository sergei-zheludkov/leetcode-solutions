type Fn = (accum: number, curr: number) => number;

export const reduce = (nums: number[], fn: Fn, init: number): number => {
  let result = init;

  for (let index = 0; index < nums.length; index++) {
    result = fn(result, nums[index]);
  }

  return result;
};

// export const reduce = (nums: number[], fn: Fn, init: number): number => {
//   if (!nums.length) {
//     return init;
//   }
//
//   const [first, ...rest] = nums;
//
//   return reduce(rest, fn, fn(init, first));
// };
