export const removeElement = (nums: number[], val: number): number => {
  const indexes: number[] = [];

  nums.forEach((num, i) => {
    if (num === val) {
      indexes.push(i);
    }
  });

  indexes.reverse().forEach((i) => {
    nums.splice(i, 1);
  });

  return nums.length;
};
