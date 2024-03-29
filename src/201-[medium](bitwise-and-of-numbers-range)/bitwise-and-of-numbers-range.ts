
export const rangeBitwiseAnd = (left: number, right: number): number => {
  let result = 0;
  let index = 30;

  while (index >= 0 && (left >> index === right >> index)) {
    result |= (left >> index) << index;
    index--;
  }

  return result;
};

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

