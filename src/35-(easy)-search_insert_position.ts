// link to problem: https://leetcode.com/problems/search-insert-position

const test1_arr = [1,3,5,6];
const test1_val = 5;
const test2_arr = [1,3,5,6];
const test2_val = 2;
const test3_arr = [1,3,5,6];
const test3_val = 7;
const test4_arr = [1,3,5,6];
const test4_val = 0;

function searchInsert(nums: number[], target: number): number {
  for (let step = 0; step < (nums.length / 2); step++) {
    const firstIndex = step;
    const first = nums[firstIndex];
    const second = nums[firstIndex + 1];
    const lastIndex = nums.length - 1 - step;
    const last = nums[lastIndex];
    const secondLast = nums[lastIndex - 1];

    if (first === target) {
      return firstIndex
    }

    if (last === target) {
      return lastIndex
    }

    if (first < target && target < second) {
      return firstIndex + 1
    }

    if (secondLast < target && target < last) {
      return lastIndex
    }

    if (target < first) {
      return 0;
    }

    if (target > last) {
      return nums.length
    }
  }

  return NaN;
}

console.log(`test_1: ${test1_arr} | ${test1_val}`, '\n Expected: 2', '\n Output:', searchInsert(test1_arr, test1_val))
console.log(`test_2: ${test2_arr} | ${test2_val}`, '\n Expected: 1', '\n Output:', searchInsert(test2_arr, test2_val))
console.log(`test_3: ${test3_arr} | ${test3_val}`, '\n Expected: 4', '\n Output:', searchInsert(test3_arr, test3_val))
console.log(`test_4: ${test4_arr} | ${test4_val}`, '\n Expected: 0', '\n Output:', searchInsert(test4_arr, test4_val))

export { searchInsert };
