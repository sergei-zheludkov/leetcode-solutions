export const removeDuplicates = (nums: number[]): number => {
  const copiedNums = [...nums];
  const encounteredNums: Record<number, boolean> = {};

  const filteredNums = copiedNums.filter((num) => {
    if (!encounteredNums[num]) {
      encounteredNums[num] = true;
      return true;
    } else {
      return false;
    }
  });

  nums.splice(0, nums.length, ...filteredNums);

  return nums.length;
};
