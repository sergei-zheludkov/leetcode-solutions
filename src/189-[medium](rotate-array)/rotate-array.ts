export const rotate = (nums: number[], k: number): void => {
  let offset = k % nums.length;

  while (offset) {
    const num = nums.pop();

    if (num) {
      nums.unshift(num);
    }

    offset--;
  }
};
