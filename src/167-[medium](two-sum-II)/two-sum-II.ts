export const twoSum = (numbers: number[], target: number) => {
  let l = 0, r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];

    if (sum > target) {
      r -= 1;
    } else if (sum < target) {
      l += 1;
    } else {
      return [l + 1, r + 1];
    }
  }
};
