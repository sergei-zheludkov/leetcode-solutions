type Fn = (n: number, i: number) => unknown

export const filter = (arr: number[], fn: Fn): number[] => {
  const result: typeof arr = [];

  for (let index = 0; index < arr.length; index++) {
    const elem = arr[index];

    if (fn(elem, index)) {
      result.push(elem);
    }
  }

  return result;
};

// const filter = (arr: number[], fn: Fn, index = 0): number[] => {
//   if (!arr.length) {
//     return [];
//   }
//
//   const [first, ...rest] = arr;
//   const filtered = filter(rest, fn, index + 1);
//
//   return fn(first, index) ? [first, ...filtered] : filtered;
// };
