const test1_arr = [3,2,3];
const test2_arr = [2,2,1,1,1,2,2];
const test3_arr = [1];
const test4_arr = [3,3,4];

function majorityElement(nums: number[]): number {
  const obj = nums.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }

    return acc;
  }, {} as Record<string, number>);

  const max = Math.max(...Object.values(obj));
  const key = Object.keys(obj).find(key => obj[key] === max);

  return Number(key);
}

console.log('test_1: => 3', majorityElement(test1_arr));
console.log('test_2: => 2', majorityElement(test2_arr));
console.log('test_3: => 1', majorityElement(test3_arr));
console.log('test_4: => 3', majorityElement(test4_arr));

export { majorityElement };