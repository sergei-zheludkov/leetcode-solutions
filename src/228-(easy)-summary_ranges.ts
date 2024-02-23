// link to problem: https://leetcode.com/problems/summary-ranges

const test1_nums = [0,1,2,4,5,7];
const test2_nums = [0,2,3,4,6,8,9];
const test3_nums = [-1000000000,-9999,0,1,2,10,100,1000,999999999,1000000000];

const getTextRange = (start: number, finish: number) => start === finish ? `${start}` : `${start}->${finish}`;

const summaryRanges = (nums: number[]): string[] => {
  const result: string[] = [];

  let start = nums[0];
  let finish = nums[0];

  for (let index = 0; index < nums.length; index++) {
    const next = nums[index + 1] ?? Infinity;

    if (finish === next - 1) {
      finish = next;
    } else {
      result.push(getTextRange(start, finish));
      start = next;
      finish = next;
    }
  }

  return result;
};

console.log(`test1: \n ARRAY: ${test1_nums} \n EXPECTED: ["0->2","4->5","7"] \n OUTPUT:`, summaryRanges(test1_nums).toString());
console.log(`test2: \n ARRAY: ${test2_nums} \n EXPECTED: ["0","2->4","6","8->9"] \n OUTPUT:`, summaryRanges(test2_nums).toString());
console.log(`test2: \n ARRAY: ${test3_nums} \n EXPECTED: ["-1000000000","-9999","0->2","10","100","1000","999999999->1000000000"] \n OUTPUT:`, summaryRanges(test3_nums).toString());

export { summaryRanges };