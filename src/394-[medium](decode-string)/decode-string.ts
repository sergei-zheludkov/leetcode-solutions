/* eslint-disable no-fallthrough */

export const decodeString = (str: string): string => {
  let res = '';
  let stack = 0;
  let i = 0;

  while (i < str.length) {
    if (str[i].match(/\d/)) {
      let repeat_count = '';

      while (str[i] !== '[') {
        repeat_count += str[i];
        i++;
      }

      i++;
      stack++;

      const start = i;

      while (stack) {
        if (str[i] === '[') {
          stack++;
        }
        if (str[i] === ']') {
          stack--;
        }
        i++;
      }

      res += decodeString(str.slice(start, i - 1)).repeat(Number(repeat_count));
    } else {
      res += str[i];
      i++;
    }
  }

  return res;
};
