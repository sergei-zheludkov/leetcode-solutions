export const deckRevealedIncreasing = (deck: number[]): number[] => {
  deck.sort((a, b) => a - b);

  const result = new Map<number, number>();
  const queue = [...deck];

  for (const card of deck) {
    const i = queue.shift();

    i && result.set(i, card);

    const transferNum = queue.shift();

    transferNum &&  queue.push(transferNum);
  }

  return Array.from(result.entries())
    .sort(([key1], [key2]) => key1 - key2)
    .map(([, value]) => value);
};
