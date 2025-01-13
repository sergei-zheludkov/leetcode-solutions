export const stringMatching = (words: string[]): string[] => {
  const res: string[] = [];

  let i = 0, j = i + 1;

  while (i < words.length && j < words.length) {
    if (j == i) {
      j++;
      continue;
    }

    if (words[j].includes(words[i])) {
      res.push(words[i]);
      i++;
      j = 0;
      continue;
    }

    if (j === words.length - 1) {
      i++;
      j = 0;
    } else {
      j++;
    }
  }

  return res;
};
