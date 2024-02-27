export const majorityElement = (nums: number[]): number => {
  const obj = nums.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }

    return acc;
  }, {} as Record<string, number>);

  const max = Math.max(...Object.values(obj));
  const key = Object.keys(obj).find(str => obj[str] === max);

  return Number(key);
};
