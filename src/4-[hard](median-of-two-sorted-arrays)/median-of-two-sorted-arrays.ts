export const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
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
