export const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const collection = new Map<string, number>();

  for (const char of magazine) {
    collection.set(char, (collection.get(char) ?? 0) + 1);
  }

  for (const char of ransomNote) {
    const item = collection.get(char);

    if (!item) {
      return false;
    }

    collection.set(char, item - 1);
  }

  return true;
};

