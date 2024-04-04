export const maxDepth = (str: string): number => {
  let max = 0;

  for (let i = 0, depth = 0; i < str.length; i++) {
    if (str[i] === '(') {
      depth += 1;
    }

    if (str[i] === ')') {
      depth -= 1;
    }

    max = Math.max(max, depth);
  }

  return max;
};