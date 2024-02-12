// link to problem: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree

import { TreeNode } from "./models/tree-node";

const test1_nums = [-10,-3,0,5,9];
const test2_nums = [1,3];
const test3_nums = [-10,-3,0,1,5,9];

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }

  const middleIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, middleIndex);
  const right = nums.slice(middleIndex + 1);

  return new TreeNode(nums[middleIndex], sortedArrayToBST(left), sortedArrayToBST(right))
}

console.log(`test 1: ${test1_nums} \n Output:`, sortedArrayToBST(test1_nums));
console.log(`test 2: ${test2_nums} \n Output:`, sortedArrayToBST(test2_nums));
console.log(`test 3: ${test3_nums} \n Output:`, sortedArrayToBST(test3_nums));

export { sortedArrayToBST };
