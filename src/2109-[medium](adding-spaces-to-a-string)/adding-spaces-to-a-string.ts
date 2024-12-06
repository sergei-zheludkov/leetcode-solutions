export const addSpaces = (str: string, spaces: number[]): string => {
  let result = '';

  for (let i = str.length - 1, j = spaces.length - 1; ~i ; i--) {
    let space = '';

    if (i === spaces[j]) {
      space = ' ';
      j--;
    }

    result = `${space}${str[i]}${result}`;
  }

  return result;
};
