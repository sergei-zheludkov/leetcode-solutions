export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  for (let i = 0; i < flowerbed.length; i++) {
    if (!n) {
      return true;
    }

    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      n -= 1;
    }
  }

  return !n;
};
