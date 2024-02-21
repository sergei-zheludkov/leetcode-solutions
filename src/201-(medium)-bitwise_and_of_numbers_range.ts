// link to problem: https://leetcode.com/problems/bitwise-and-of-numbers-range

const test2_left = 9;
const test2_right = 15;

const test3_left = 1028;
const test3_right = 2047;

function rangeBitwiseAnd(left: number, right: number): number {
  let result = 0;
  let index = 30;

  while (index >= 0 && (left >> index === right >> index)) {
    result |= (left >> index) << index;
    index--;
  }

  return result;
}

// PREV SOLUTION

// const rangeBitwiseAnd = (left: number, right: number): number => {
//   const binaryLeft = left.toString(2);
//   const binaryRight = right.toString(2);
//
//   if (binaryLeft.length !== binaryRight.length) {
//     return 0;
//   }
//
//   let result = "";
//
//   for (let index = 0; index < binaryLeft.length && result.length !== binaryLeft.length ; index++) {
//     const leftNum = Number(binaryLeft[index]);
//     const rightNum = Number(binaryRight[index]);
//
//     if (leftNum === rightNum) {
//       result = `${result}${leftNum}`;
//     } else {
//       result = `${result}${"0".repeat(binaryLeft.length - result.length)}`;
//     }
//   }
//
//   return parseInt(result, 2);
// };

console.log(rangeBitwiseAnd(test2_left, test2_right)) // => 8

console.log(rangeBitwiseAnd(test3_left, test3_right)) // => 0