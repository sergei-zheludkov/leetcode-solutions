export const reverseWords = (str: string): string => str
  .split(' ')
  .reduce((acc, word) => word ? `${word} ${acc}` : acc)
  .trim();

// export const reverseWords = (str: string): string => str
//   .split(' ')
//   .filter((word) => word)
//   .reverse()
//   .join(' ');
