// link to problem: https://leetcode.com/problems/single-number/

const test1_nums = [2,2,1];
const test2_nums = [4,1,2,1,2];
const test3_nums = [1];

const singleNumber = (nums: number[]): number => {
  const collection = new Set<number>();

  for (const num of nums) {
    if (collection.has(num)){
      collection.delete(num);
    } else {
      collection.add(num);
    }
  }

  return collection.values().next().value;
};

console.log(`test1: \n EXPECTED: 1 \n OUTPUT:`, singleNumber(test1_nums));
console.log(`test2: \n EXPECTED: 4 \n OUTPUT:`, singleNumber(test2_nums));
console.log(`test3: \n EXPECTED: 1 \n OUTPUT:`, singleNumber(test3_nums));


export { singleNumber };
