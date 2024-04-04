export const majorityElement = (nums: number[]): number[] => {
  const counts: Record<number, number> = {};
  const result: number[] = [];

  for (const n of nums) {
    if (!counts[n]) {
      counts[n] = 1;
    } else {
      counts[n] += 1;
    }
  }

  for (const key in counts) {
    if (counts[key] > nums.length / 3) {
      result.push(Number(key));
    }
  }

  return result;
};
