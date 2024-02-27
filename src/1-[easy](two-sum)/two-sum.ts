export const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    const hasComplement = map.has(complement);

    if (!hasComplement) {
      map.set(nums[i], i);

      continue;
    }

    const element = map.get(complement);

    if (element !== undefined) {
      return [element, i];
    }

  }

  return [];
};
