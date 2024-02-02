// link to problem: https://leetcode.com/problems/two-sum

const test1_arr = [2,7,11,15];
const test1_target = 9;
const test2_arr = [3,2,4];
const test2_target = 6;
const test3_arr = [3,3];
const test3_target = 6;

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    const hasComplement = map.has(complement);

    if (!hasComplement) {
      map.set(nums[i], i);

      continue;
    }

    const element = map.get(complement);

    if (element !== undefined) {
      return [element, i];
    }

  }

  return [];
}

console.log('test_1: => [0,1]', twoSum(test1_arr, test1_target));
console.log('test_2: => [1,2]', twoSum(test2_arr, test2_target));
console.log('test_3: => [0,1]', twoSum(test3_arr, test3_target));

export { twoSum };