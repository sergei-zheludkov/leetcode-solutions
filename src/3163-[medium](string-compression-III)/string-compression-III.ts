export const compressedString = (word: string): string => {
  let res = '';

  for (let curr = 0, prev = -1; curr < word.length; curr++) {
    if (word[curr] !== word[curr + 1]) {
      res += (curr - prev) + word[curr];
      prev = curr;
    } else if (curr - prev === 9) {
      res += (curr - prev) + word[curr];
      prev = curr;
    }
  }

  return res;
};
