export const reverseStr = (str: string, k: number): string => {
  const chars = str.split('');
  let circle = 1;
  let l = 0;
  let r = k - 1;

  while (l < str.length) {
    while (l < r) {
      [chars[l], chars[r]] = [chars[r], chars[l]];

      l++;
      r--;
    }

    l = 2 * k * circle;
    r = (l + k) - 1;
    circle++;
  }

  return chars.join('');
};
