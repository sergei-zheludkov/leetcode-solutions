export const maximumWealth = (accounts: number[][]): number => {
  let max = 0;

  for (const nums of accounts) {
    let curr = 0;

    for (const num of nums) {
      curr += num;
    }

    max = Math.max(max, curr);
  }

  return max;
};
