const setCount = (map: Map<number, number>) => (array: number[], ind: number) => map.set(array[ind], (map.get(array[ind]) ?? 0) + 1);

export const arraysIntersection = (arr1: number[], arr2: number[], arr3: number[]): number[] => {
  const map = new Map<number, number>();
  const setCountInMap = setCount(map);

  for (let i = 0; i < arr1.length; i++) {
    setCountInMap(arr1, i);
    setCountInMap(arr2, i);
    setCountInMap(arr3, i);
    // map.set(arr1[i], (map.get(arr1[i]) ?? 0) + 1);
    // map.set(arr2[i], (map.get(arr2[i]) ?? 0) + 1);
    // map.set(arr3[i], (map.get(arr3[i]) ?? 0) + 1);
  }

  const result: number[] = [];

  map.forEach((val, key) => {
    if (val === 3) {
      result.push(key);
    }
  });


  return result;
};
