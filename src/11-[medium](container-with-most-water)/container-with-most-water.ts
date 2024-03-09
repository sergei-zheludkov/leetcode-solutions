export const maxArea = (height: number[]): number => {
  let i = 0;
  let j = height.length - 1;
  let max = 0;

  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);

    if (area > max) {
      max = area;
    }

    if (height[i] < height[j]) {
      i++;
    } else if (height[j] < height[i]) {
      j--;
    } else {
      i++;
      j--;
    }
  }

  return max;
};