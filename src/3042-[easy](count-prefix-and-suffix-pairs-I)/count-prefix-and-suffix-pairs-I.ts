const isPrefixAndSuffix = (str1: string, str2: string) => str2.startsWith(str1) && str2.endsWith(str1);

export const countPrefixSuffixPairs = (words: string[]): number => {
  let i = 0, j = 1;

  let res = 0;

  while(i < words.length - 1) {
    if (isPrefixAndSuffix(words[i], words[j])) {
      res++;
    }

    if (j < words.length - 1) {
      j++;
    } else {
      i++;
      j = i + 1;
    }
  }

  return res;
};
