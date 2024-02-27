export const lengthOfLastWord = (str: string): number => {
  const trimStr = str.trimEnd();

  let count = 0;

  for (let step = trimStr.length - 1; step >= 0; step--, count++) {
    if (trimStr[step] === ' ') {
      break;
    }
  }

  return count;
};
