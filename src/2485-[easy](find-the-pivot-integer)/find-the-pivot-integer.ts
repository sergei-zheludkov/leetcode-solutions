export const pivotInteger = (n: number): number => {
  let prefixSum = 0;

  for (let i = 1; i <= n; i++) {
    prefixSum += i;
  }

  let postfixSum = 0;

  for (let i = 1; i <= n; i++) {
    postfixSum += i;

    if (postfixSum === (prefixSum - postfixSum + i)) {
      return i;
    }
  }

  return -1;
};

// export const pivotInteger = (n: number): number => {
//   let prefixSum = 0;
//   let postfixSum = 0;
//
//   for (let i = 1; i <= n; i++) {
//     prefixSum += i;
//     postfixSum = 0;
//
//     for (let j = i; j <= n; j++) {
//       postfixSum += j;
//
//       if (postfixSum > prefixSum) {
//         break;
//       }
//     }
//
//     if (prefixSum === postfixSum) {
//       return i;
//     }
//
//     if (prefixSum > postfixSum) {
//       break;
//     }
//   }
//
//   return -1;
// };
