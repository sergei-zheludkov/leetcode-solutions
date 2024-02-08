// link to problem: https://leetcode.com/problems/contains-duplicate-ii

const test1_arr = [1,2,3,1];
const test2_arr = [1,0,1,1];
const test3_arr = [1,2,3,1,2,3];
const test1_k = 3;
const test2_k = 1;
const test3_k = 2;

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const collection = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const prevNumIndex = collection.get(num);
    const isPrevIndexExist = prevNumIndex !== undefined;

    if (isPrevIndexExist && (Math.abs(prevNumIndex - index) <= k)) {
      return true;
    } else {
      collection.set(num, index)
    }
  }

  return false;
}

console.log(`test 1: \n Expected: true \n Output: ${containsNearbyDuplicate(test1_arr, test1_k)}`);
console.log(`test 2: \n Expected: true \n Output: ${containsNearbyDuplicate(test2_arr, test2_k)}`);
console.log(`test 3: \n Expected: false \n Output: ${containsNearbyDuplicate(test3_arr, test3_k)}`);

export { containsNearbyDuplicate };
