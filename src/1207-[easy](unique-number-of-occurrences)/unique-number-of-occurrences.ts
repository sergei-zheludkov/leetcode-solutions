export const uniqueOccurrences = (arr: number[]): boolean => {
  const map = new Map<number, number>();

  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const set = new Set<number>();

  map.forEach((value) => set.add(value));

  return map.size === set.size;
};
