const getTextRange = (start: number, finish: number) => start === finish ? `${start}` : `${start}->${finish}`;

export const summaryRanges = (nums: number[]): string[] => {
  const result: string[] = [];

  let start = nums[0];
  let finish = nums[0];

  for (let index = 0; index < nums.length; index++) {
    const next = nums[index + 1] ?? Infinity;

    if (finish === next - 1) {
      finish = next;
    } else {
      result.push(getTextRange(start, finish));
      start = next;
      finish = next;
    }
  }

  return result;
};
