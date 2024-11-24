export const kthGrammar = (n: number, k: number, value = false): number => {
  if (!--n) {
    return Number(value);
  }

  const nodesInHalfOfRowCount = (2 ** n) / 2;

  return k > nodesInHalfOfRowCount
    ? kthGrammar(n, k - nodesInHalfOfRowCount, !value)
    : kthGrammar(n, k, value);
};

