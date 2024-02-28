export const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
  const result: typeof arr = [];

  for (let index = 0; index < arr.length; index++) {
    result.push(fn(arr[index], index));
  }

  return result;
};

// export const map = (arr: number[], fn: (n: number, i: number) => number, index = 0): number[] => {
//   if (!arr.length) {
//     return [];
//   }
//
//   const [first, ...rest] = arr;
//
//   return [fn(first, index), ...map(rest, fn, index + 1)];
// };
