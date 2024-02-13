export const checkPalindrome = (str: string): boolean => {
  for (let step = 0; step < (str.length - 1) / 2; step++) {
    const first = str[step];
    const last = str[str.length - 1 - step];

    if (first !== last) {
      return false;
    }
  }

  return true;
};
