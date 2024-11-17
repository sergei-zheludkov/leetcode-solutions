/**
 Do not return anything, modify arr in-place instead.
 */
export const duplicateZeros = (array: number[]): void => {
  for (let i = array.length; ~i; i--) {
    if (!array[i]) {
      array.splice(i + 1, 0, 0);

      array.splice(array.length - 1, 1);
    }
  }
};
