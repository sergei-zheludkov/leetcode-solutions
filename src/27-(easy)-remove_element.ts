// link to problem: https://leetcode.com/problems/remove-element

const test1_arr = [3,2,2,3];
const test1_val = 3;
const test2_arr = [0,1,2,2,3,0,4,2];
const test2_val = 2;

function removeElement(nums: number[], val: number): number {
  const indexes: number[] = [];

  nums.forEach((num, i) => {
    if (num === val) {
      indexes.push(i)
    }
  });

  indexes.reverse().forEach((i) => {
    nums.splice(i, 1)
  });

  return nums.length;
}

console.log('test_1: => 2', removeElement(test1_arr, test1_val));
console.log('test_2: => 5', removeElement(test2_arr, test2_val));


