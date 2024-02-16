// link to problem: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals


const test1_args: [number[], number] = [[5, 5, 4], 1];
const test2_args: [number[], number] = [[4, 3, 1, 1, 3, 3, 2], 3];
const test3_args: [number[], number] = [[5,5,4,5,1,2,2,3,3,4,6,1,9], 3];
const test4_args: [number[], number] = [[5,5,4,5,1,2,2,3,3,4,6,1,9], 4];
const test5_args: [number[], number] = [[5,5,4,5,1,2,2,3,3,4,6,1,9], 5];
const test6_args: [number[], number] = [[5,5,4,5,1,2,2,3,3,4,6,1,9], 6];

const findLeastNumOfUniqueInts = (arr: number[], k: number): number => {
  const collection = new Map<number, number>();

  for (const num of arr) {
    collection.set(num, (collection.get(num) || 0) + 1);
  }

  const countedResult = Array.from(collection.values()).sort((countA, countB) => countB - countA);

  while (k) {
    const count = countedResult[countedResult.length - 1]

    if (count && k >= count) {
      k -= count;
      countedResult.pop();
    } else {
      return countedResult.length;
    }
  }

  return countedResult .length;
}

export { findLeastNumOfUniqueInts }

console.log('test1: \n EXPECTED: 1 \n OUTPUT:', findLeastNumOfUniqueInts(...test1_args))
console.log('test2: \n EXPECTED: 2 \n OUTPUT:', findLeastNumOfUniqueInts(...test2_args))
console.log('test3: \n EXPECTED: 5 \n OUTPUT:', findLeastNumOfUniqueInts(...test3_args))
console.log('test4: \n EXPECTED: 4 \n OUTPUT:', findLeastNumOfUniqueInts(...test4_args))
console.log('test5: \n EXPECTED: 4 \n OUTPUT:', findLeastNumOfUniqueInts(...test5_args))
console.log('test6: \n EXPECTED: 3 \n OUTPUT:', findLeastNumOfUniqueInts(...test6_args));