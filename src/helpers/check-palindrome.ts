export const checkPalindrome = (str: string): boolean => {
  for (let i = 0, j = str.length - 1; i < j; ) {
    const first = str[i];
    const last = str[j];

    if (first !== last) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};
