export const rotateString = (str: string, goal: string): boolean => {
  if (str.length !== goal.length) {
    return false;
  }

  for (let i = str.length; i; i--) {
    str = str.slice(1) + str[0];

    if (str === goal) {
      return true;
    }
  }

  return false;
};
