export const findDuplicate = (nums: number[]): number | void => {
  const collection: number[] = [];

  let i = 0, j = nums.length - 1;

  while (i <= j) {
    if (collection[nums[i]]) {
      return nums[i];
    } else  {
      collection[nums[i]] = nums[i];
    }

    if (collection[nums[j]]) {
      return nums[j];
    } else  {
      collection[nums[j]] = nums[j];
    }

    i++;
    j++;
  }
};
