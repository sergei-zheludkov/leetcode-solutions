export const frequencySort = (str: string): string => {
  const letterCount = str.split('')
    .reduce<Record<string, number>>((letterCountAcc, letter) => {
      if (letterCountAcc[letter]) {
        letterCountAcc[letter] += 1;
      } else {
        letterCountAcc[letter] = 1;
      }
      return letterCountAcc;
    } , {});

  return  Object.entries(letterCount)
    .sort(([, countA], [, countB]) => countA < countB ? 1 : -1)
    .reduce((acc, [letter, count]) => `${acc}${letter.repeat(count)}`, '');
};
