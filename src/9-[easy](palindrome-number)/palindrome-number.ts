export const isPalindrome = (num: number): boolean => {
  for (let step = 0, str = String(num); step < (str.length / 2); step++) {
    if (!(str[step] === str[str.length - (step + 1)])) {
      return false;
    }
  }

  return true;
};
