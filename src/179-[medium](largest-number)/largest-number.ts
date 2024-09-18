export const largestNumber = (nums: number[] | string[]): string => {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].toString();
  }

  (nums as string[]).sort((a,b)=> a + b > b + a ? -1 : 1);

  return nums[0] === '0' ? '0' : nums.join('');
};

// export const largestNumber = (nums: number[]): string => {
//   let result: number[] = [];
//
//   for (const num of nums) {
//     const variants = new Map<string, number[]>();
//
//     for (let i = 0; i <= result.length; i++) {
//       result.splice(i, 0, num);
//
//       variants.set(result.join(''), [...result]);
//
//       result.splice(i, 1);
//     }
//
//     const [max] = [...variants.keys()].sort((a, b) => a < b ? 1 : -1);
//
//     result = variants.get(max) ?? [];
//   }
//
//
//   let zeros = 0;
//
//   if (result[0] === 0) {
//     for (let i = 0; i <= result.length; i++) {
//       if (result[i] === 0 && result[i + 1] === 0) {
//         zeros += 1;
//       }
//     }
//
//     return result.slice(zeros).join('');
//   }
//
//   return result.join('');
// };
