export const lengthOfLongestSubstring = (str: string): number => {
  const collection = new Set<string>();

  let i = 0, j = 0, max = 0;

  while (j < str.length) {
    max = Math.max(max, j - i);

    while (collection.has(str[j])) collection.delete(str[i++]);

    collection.add(str[j++]);
  }

  return Math.max(max, j - i);
};
