const tribs: number[] = [0, 1, 1];

for (let i = 2; i < 37; i++) {
  tribs[i+1] = tribs[i] + tribs[i-1] + tribs[i-2];
}

export const tribonacci = (n: number): number => {
  return tribs[n];
};
