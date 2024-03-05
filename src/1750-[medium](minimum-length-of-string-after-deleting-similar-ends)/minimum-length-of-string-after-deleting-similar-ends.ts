export const minimumLength = (str: string): number => {
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) {
      break;
    }

    if (str[i] === str[i + 1]) {
      i++;
    } else if (str[j] === str[j - 1]) {
      j--;
    } else {
      i++;
      j--;
    }
  }

  return Math.abs(j + 1 - i);
};
