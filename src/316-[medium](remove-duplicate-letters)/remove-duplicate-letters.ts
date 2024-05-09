export const removeDuplicateLetters = (str: string): string => {
  const collection = new Map<string, number>();

  for (let i = 0; i < str.length; i++) {
    collection.set(str[i], i);
  }

  const encountered = new Set<string>();
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (encountered.has(str[i])) {
      continue;
    }

    while (
      stack.length &&
      (str[i] < stack[stack.length - 1]) &&
      (i < collection.get(stack[stack.length - 1])!)
    ) {
      encountered.delete(stack.pop()!);
    }

    encountered.add(str[i]);
    stack.push(str[i]);
  }

  return stack.join('');
};
