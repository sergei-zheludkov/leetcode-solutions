// link: https://leetcode.com/problems/contains-duplicate

const test1_arr = [1,2,3,1];
const test2_arr = [1,2,3,4];
const test3_arr = [1,1,1,3,3,4,3,2,4,2]

function containsDuplicate(nums: number[]): boolean {
  const collection = new Set(nums)

  return collection.size !== nums.length;
}

console.log(`test 1: \n Expected: true \n Output: ${containsDuplicate(test1_arr)}`);
console.log(`test 2: \n Expected: false \n Output: ${containsDuplicate(test2_arr)}`);
console.log(`test 3: \n Expected: true \n Output: ${containsDuplicate(test3_arr)}`);


export { containsDuplicate };
