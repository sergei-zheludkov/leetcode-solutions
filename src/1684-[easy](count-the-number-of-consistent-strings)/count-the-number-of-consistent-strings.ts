export const countConsistentStrings = (allowed: string, words: string[]): number => {
  const chars = new Set<string>(allowed);
  let count = words.length;

  for (const word of words) {
    for (const letter of word) {
      if (!chars.has(letter)) {
        count--;
        break;
      }
    }
  }

  return count;
};