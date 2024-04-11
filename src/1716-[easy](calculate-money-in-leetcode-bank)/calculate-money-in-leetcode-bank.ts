export const totalMoney = (n: number): number => {
  let result = 0;

  const weekCount = Math.floor(n / 7);

  for (let weeks = weekCount - 1; weeks >= 0; weeks--) {
    result += 28 + (7 * weeks);
  }

  for (let days = n % 7; days > 0; days--) {
    result += days + weekCount;
  }

  return result;
};
