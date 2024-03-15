export const chunk = (arr: number[], size: number): number[][] => {
  const resultArray: number[][] = [];

  for (let i = 0; i < arr.length;) {
    resultArray.push(arr.slice(i, i += size));
  }

  return resultArray;
};
