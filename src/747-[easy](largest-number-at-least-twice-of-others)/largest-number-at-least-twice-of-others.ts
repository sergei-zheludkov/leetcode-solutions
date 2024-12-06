export const dominantIndex = (nums: number[]): number => {
  let first: [number, number] = [-Infinity, -Infinity]; // [num, ind]
  let second: [number, number] = [-Infinity, -Infinity]; // [num, ind]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first[0]) {
      second = [...first];
      first = [nums[i], i];
    } else if (nums[i] > second[0]) {
      second = [nums[i], i];
    }
  }

  return first[0] / 2 >= second[0] ? first[1] : -1;
};
