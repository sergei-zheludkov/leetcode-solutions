export const findRelativeRanks = (score: number[]): string[] => {
  const collection = new Map<number, string>();

  for (const num of score) {
    collection.set(num, '');
  }

  score.sort((a, b) => b - a);

  let i = 0;

  while (i < score.length && i < 3) {
    switch (i) {
      case 0:
        collection.set(score[i], 'Gold Medal');
        break;
      case 1:
        collection.set(score[i], 'Silver Medal');
        break;
      case 2:
        collection.set(score[i], 'Bronze Medal');
        break;
    }

    i++;
  }

  while (i < score.length) {
    collection.set(score[i], String(i + 1));

    i++;
  }

  return Array.from(collection.values());
};