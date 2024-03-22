type MultiDimensionalArray = (number | MultiDimensionalArray)[];

export const flat = (arr:  MultiDimensionalArray, n: number): MultiDimensionalArray => arr
  .reduce<MultiDimensionalArray>((acc, elem) => {
    if (Array.isArray(elem) && n) {
      acc.push(...flat(elem, n - 1));
    } else {
      acc.push(elem);
    }
    return acc;
  }, []);

// export const flat = (arr:  MultiDimensionalArray, n: number): MultiDimensionalArray => {
//   return arr.reduce<MultiDimensionalArray>((acc, elem) => {
//     if (Array.isArray(elem) && n) {
//       return [...acc, ...flat(elem, n - 1)];
//     }
//     return [...acc, elem];
//   }, []);
// };