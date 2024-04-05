export const makeGood = (str: string): string => {
  const stack: string[] = [];

  for (const char of str) {
    const last = stack[stack.length - 1] || '';

    if (last !== char && last.toLowerCase() === char.toLowerCase()) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
