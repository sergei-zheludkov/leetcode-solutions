// link to problem: https://leetcode.com/problems/largest-divisible-subset

const test1_arr = [1,2,3];
const test2_arr = [1,2,4,8];
const test3_arr = [1,3,9,12];
const test4_arr = [1,2,3,5,7,11];
const test5_arr = [1,2,3,6,7,11];
const test6_arr = [1,2,3,8,7,4,12,100,9,18,36];
const test7_arr = [1,2,800,3,8,7,4,12,100,200,20,10,9,18,400,5,36];
const test8_arr = [1,2,800,3,8,7,4,12,1000,50,17,9,18,400,5,36];
const test9_arr = [9,75,12,18,90,4,36,8,28,2];

function largestDivisibleSubset(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const divisibleForwardKits = nums
    .sort((a, b) => a - b)
    .reduce<number[][]>((acc, num) => {
      for (let step = 0; step < acc.length; step++) {
        const isSuitable = !acc[step]
          .filter((item) => num % item !== 0)
          .length;

        if (isSuitable) {
          acc[step].push(num);
        }
      }
      acc.push([num]);

      return acc;
    }, [])

  let theLongestLengthIndex = 0;

  nums.reverse().forEach((num => {
    for (let step = 0; step < divisibleForwardKits.length; step++) {
      if (divisibleForwardKits[step].includes(num)) {
        continue;
      }

      const isSuitable = !divisibleForwardKits[step]
        .filter((item) => item % num !== 0)
        .length;

      if (isSuitable) {
        divisibleForwardKits[step].push(num);
      }

      const prevTheLongestLength = divisibleForwardKits[theLongestLengthIndex].length;
      const currentLength = divisibleForwardKits[step].length;

      if (prevTheLongestLength < currentLength) {
        theLongestLengthIndex = step;
      }
    }
  }));

  return divisibleForwardKits[theLongestLengthIndex];
}

console.log(`test1: \n ARRAY: ${test1_arr} \n EXPECTED: 2 \n OUTPUT:`, largestDivisibleSubset(test1_arr).length);
console.log(`test2: \n ARRAY: ${test2_arr} \n EXPECTED: 4 \n OUTPUT:`, largestDivisibleSubset(test2_arr).length);
console.log(`test3: \n ARRAY: ${test3_arr} \n EXPECTED: 3 \n OUTPUT:`, largestDivisibleSubset(test3_arr).length);
console.log(`test4: \n ARRAY: ${test4_arr} \n EXPECTED: 2 \n OUTPUT:`, largestDivisibleSubset(test4_arr).length);
console.log(`test5: \n ARRAY: ${test5_arr} \n EXPECTED: 3 \n OUTPUT:`, largestDivisibleSubset(test5_arr).length);
console.log(`test6: \n ARRAY: ${test6_arr} \n EXPECTED: 5  \n OUTPUT:`, largestDivisibleSubset(test6_arr).length);
console.log(`test7: \n ARRAY: ${test7_arr} \n EXPECTED: 8 \n OUTPUT:`, largestDivisibleSubset(test7_arr).length);
console.log(`test8: \n ARRAY: ${test8_arr} \n EXPECTED: 6 \n OUTPUT:`, largestDivisibleSubset(test8_arr).length);
console.log(`test9: \n ARRAY: ${test9_arr} \n EXPECTED: 4 \n OUTPUT:`, largestDivisibleSubset(test9_arr).length);

export { largestDivisibleSubset };
