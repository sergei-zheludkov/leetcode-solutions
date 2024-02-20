// link to problem: https://leetcode.com/problems/median-of-two-sorted-arrays

const test1_arr1 = [1, 3];
const test1_arr2 = [2];

const test2_arr1 = [1, 2];
const test2_arr2 = [3, 4];

const test3_arr1 = [0, 0];
const test3_arr2 = [0, 0];

const test4_arr1: number[] = [];
const test4_arr2 = [1];

const test5_arr1 = [2];
const test5_arr2: number[] = [];

const test6_arr1 = [1,3,6,8,10];
const test6_arr2 = [2,4,9,11];

const test7_arr1 = [1,3,6,8,10];
const test7_arr2 = [2,4,9,11,12];

const test8_arr2 = [1,2,3,4,5,6,7,8];
const test8_arr1 = [1,2,3,4];

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const sorted = nums1.concat(nums2).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  const isEven = !(sorted.length % 2);

  return isEven ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
};

// TODO: Finish
//
// const findMedianSortedArrays = (a: number[], b: number[]): number => {
//   if (!(a.length >= b.length)) {
//     [a,b] = [b, a]
//   }
//
//   const lengthA = a.length
//   const lengthB = b.length
//   const total = lengthA + lengthB;
//   const half = total / 2
//   const isTotalEven = !(total % 2);
//
//   let startIndexA = 0;
//   let endIndexA = lengthA - 1;
//
//   let step = total;
//
//   while (step) {
//     const middleIndexA = Math.floor((startIndexA + endIndexA) / 2)
//     const middleIndexB = Math.floor(half - middleIndexA - 2);
//
//     const leftA = middleIndexA >= 0 ? a[middleIndexA] : -Infinity;
//     const rightA = middleIndexA + 1 < lengthA ? a[middleIndexA + 1] : Infinity;
//     const leftB = middleIndexB >= 0 ? b[middleIndexB] : -Infinity;
//     const rightB = middleIndexA + 1 < lengthA ? b[middleIndexB + 1] : Infinity;
//
//     if (leftA <= rightB && leftB <= rightA) {
//       if (isTotalEven) {
//         return (Math.max(leftA, leftB) + Math.min(rightB, rightA)) / 2;
//       }
//
//       return Math.min(rightB, rightA);
//     } else {
//
//       console.log({
//         // middleIndexA,
//         // middleIndexB,
//         leftA,
//         rightA,
//         leftB,
//         rightB,
//       })
//       if (leftA > rightB) {
//         console.log('leftA > rightB')
//         endIndexA = middleIndexA - 1;
//       } else {
//         console.log('rightB > rightA')
//         startIndexA = middleIndexA + 1
//       }
//     }
//   }
// };

console.log(`test1: \n ARRAY_1: [${test1_arr1}] \n ARRAY_2: [${test1_arr2}] \n EXPECTED: 2 \n OUTPUT:`, findMedianSortedArrays(test1_arr1, test1_arr2));
console.log(`test2: \n ARRAY_1: [${test2_arr1}] \n ARRAY_2: [${test2_arr2}] \n EXPECTED: 2.5 \n OUTPUT:`, findMedianSortedArrays(test2_arr1, test2_arr2));
console.log(`test3: \n EXPECTED: 0 \n OUTPUT:`, findMedianSortedArrays(test3_arr1, test3_arr2));
console.log(`test4: \n EXPECTED: 1 \n OUTPUT:`, findMedianSortedArrays(test4_arr1, test4_arr2));
console.log(`test5: \n ARRAY_1: [${test5_arr1}] \n ARRAY_2: [${test5_arr2}] \n EXPECTED: 2 \n OUTPUT:`, findMedianSortedArrays(test5_arr1, test5_arr2));
console.log(`test6: \n ARRAY_1: [${test6_arr1}] \n ARRAY_2: [${test6_arr2}] \n EXPECTED: 6 \n OUTPUT:`, findMedianSortedArrays(test6_arr1, test6_arr2));
console.log(`test7: \n ARRAY_1: [${test7_arr1}] \n ARRAY_2: [${test7_arr2}] \n EXPECTED: 7 \n OUTPUT:`, findMedianSortedArrays(test7_arr1, test7_arr2));
console.log(`test8: \n ARRAY_1: [${test8_arr1}] \n ARRAY_2: [${test8_arr2}] \n EXPECTED: 3.5 \n OUTPUT:`, findMedianSortedArrays(test8_arr1, test8_arr2));

export { findMedianSortedArrays };
