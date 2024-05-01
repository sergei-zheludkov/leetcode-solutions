export const reversePrefix = (word: string, ch: string): string => {
  let reverse = '';

  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      return `${word[i]}${reverse}${word.slice(i+1)}`;
    }

    reverse = `${word[i]}${reverse}`;
  }

  return word;
};
