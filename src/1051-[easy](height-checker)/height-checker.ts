export const heightChecker = (heights: number[]): number => {
  const sorted = [...heights].sort((a, b) => a - b);
  let diff = 0;

  for (let i = 0; i < sorted.length; i++){
    if (sorted[i] !== heights[i]) {
      diff++;
    }
  }

  return diff;
};