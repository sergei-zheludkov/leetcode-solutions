export const stringShift = (str: string, shifts: Array<[number, number]>): string => {
  let left_shift = 0;

  // eslint-disable-next-line prefer-const
  for (let [direction, amount] of shifts) {
    left_shift += direction ? -amount : amount;
  }

  left_shift %= str.length;

  return `${str.slice(left_shift)}${str.slice(0, left_shift)}`;
};


// export const stringShift = (str: string, shifts: Array<[number, number]>): string => {
//   let l = 0;
//   let r = 0;
//
//   for (const [direction, amount] of shifts) {
//     if (direction) {
//       r += amount;
//     } else {
//       l += amount;
//     }
//   }
//
//   if (l > r) {
//     const remainder_from_division = (l - r) % str.length;
//
//     return `${str.slice(remainder_from_division)}${str.slice(0, remainder_from_division)}`;
//   }
//
//   if (r > l) {
//     const remainder_from_division = (r - l) % str.length;
//
//     return `${str.slice(-remainder_from_division)}${str.slice(0, -remainder_from_division)}`;
//   }
//
//   return str;
// };
