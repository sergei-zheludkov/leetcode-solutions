export const removeStars = (str: string): string => {
  const stack: string[] = [];

  for (const char of str) {
    if (char === '*') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};

// const removeStars = (str: string): string => {
//   const stack: string[] = [];
//
//   for (const char of str) {
//     stack[char === '*' ? 'pop' : 'push'](char);
//   }
//
//   return stack.join('');
// };