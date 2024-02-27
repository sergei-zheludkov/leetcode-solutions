const patterns: Record<string, string> = { ')': '(', '}': '{', ']': '[' };

export const isValid = (str: string): boolean => {
  const steak: string[] = [];

  for (const bracket of str) {
    const pattern = patterns[bracket];
    const lastItem = steak[steak.length - 1];

    if (pattern && pattern === lastItem) {
      steak.pop();
    } else {
      steak.push(bracket);
    }
  }

  return !steak.length;
};
