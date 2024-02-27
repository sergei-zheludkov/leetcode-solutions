export const createCounter = (n: number) => {
  let counter = n;
  return () => counter++;
};
