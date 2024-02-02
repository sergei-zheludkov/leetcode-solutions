// link to problem: https://leetcode.com/problems/merge-sorted-array

const test1_arr1 = [1,2,3,0,0,0];
const test1_arr2 = [2,5,6];
const test1_length1 = 3;
const test1_length2 = 3;
// => [1,2,2,3,5,6];

const test2_arr1 = [1];
const test2_arr2: number[] = [];
const test2_length1 = 1;
const test2_length2 = 0;
// => [1]

const test3_arr1 = [0];
const test3_arr2 = [1];
const test3_length1 = 0;
const test3_length2 = 1;
// => [1]

const test4_arr1 = [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const test4_arr2 = [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9];
const test4_length1 = 55;
const test4_length2 = 99;
// => [-10,-10,-10,-10,-9,-9,-9,-9,-9,-9,-9,-8,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9]

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (!n) {
    nums1.splice(m);
  }

  const addArray = nums2.slice(0, n);

  nums1.splice(m, nums1.length - m, ...addArray);
  nums1.sort((a, b) => a - b);
}


merge(
  test1_arr1,
  test1_length1,
  test1_arr2,
  test1_length2,
);

merge(
  test2_arr1,
  test2_length1,
  test2_arr2,
  test2_length2,
);

merge(
  test3_arr1,
  test3_length1,
  test3_arr2,
  test3_length2,
);

merge(
  test4_arr1,
  test4_length1,
  test4_arr2,
  test4_length2,
);

console.log('test 1: [1,2,2,3,5,6] =>', test1_arr1);
console.log('test 2: [1] =>', test2_arr1);
console.log('test 3: [1] =>', test3_arr1);
console.log('test 4: \n [-10,-10,-10,-10,-9,-9,-9,-9,-9,-9,-9,-8,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9] => \n', test4_arr1.toString())

export { merge };