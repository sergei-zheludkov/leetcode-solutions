// link to problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array

const test1_arr = [1,1,2];
const test2_arr = [0,0,1,1,1,2,2,3,3,4];

function removeDuplicates(nums: number[]): number {
  const copiedNums = [...nums]
  const encounteredNums: Record<number, boolean> = {};

  const filteredNums = copiedNums.filter((num) => {
    if (!encounteredNums[num]) {
      encounteredNums[num] = true;
      return true
    } else {
      return false;
    }
  });

  nums.splice(0, nums.length, ...filteredNums)

  return nums.length;
}



console.log('test 1: | 2, [1,2] | =>', removeDuplicates(test1_arr) , test1_arr);
console.log('test 2: | 5, [0,1,2,3,4] | =>', removeDuplicates(test2_arr), test2_arr);

export { removeDuplicates };