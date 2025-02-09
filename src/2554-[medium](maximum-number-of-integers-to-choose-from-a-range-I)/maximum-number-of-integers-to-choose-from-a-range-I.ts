export const maxCount = (banned: number[], n: number, maxSum: number): number => {
  const bannedCollection = new Set(banned);

  if (n > maxSum) {
    n = maxSum;
  }

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (bannedCollection.has(i)) {
      continue;
    }

    if (maxSum - i < 0) {
      return count;
    }

    maxSum -= i;
    count++;
  }

  return count;
};
