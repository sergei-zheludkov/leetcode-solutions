export const smallestSubsequence = (str: string): string => {
  const collection = new Map<string, number>();

  for (let i = 0; i < str.length; i++) {
    collection.set(str[i], i);
  }

  const seen = new Set<string>();
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (!seen.has(str[i])) {
      while (
        stack.length &&
        str[i] < stack[stack.length - 1] &&
        i < collection.get(stack[stack.length - 1])!
      ) {
        seen.delete(stack.pop()!);
      }

      seen.add(str[i]);
      stack.push(str[i]);
    }
  }

  return stack.join('');
};
