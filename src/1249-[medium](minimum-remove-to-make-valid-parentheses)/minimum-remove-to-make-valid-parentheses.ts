export const minRemoveToMakeValid = (str: string): string => {
  const stack: number[] = [];
  const chars: string[] = [];

  for (let i = 0; i < str.length; i++) {
    chars.push(str[i]);

    if (str[i] === '(') {
      stack.push(i);
    } else if (str[i] === ')' && str[stack[stack.length - 1]] === '(') {
      stack.pop();
    } else if (str[i] === ')') {
      stack.push(i);
    }
  }


  for (let i = stack.length - 1; i >= 0; i--) {
    chars.splice(stack[i], 1);
  }

  return chars.join('');
};
