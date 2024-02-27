export const firstUniqChar = (str: string): number => {
  for (let step = 0; step < str.length; step++) {
    const current = str[step];

    const prev = str.substring(0, step);
    const rest = str.substring(step + 1);

    if (!(prev.includes(current) || rest.includes(current))) {
      return step;
    }
  }

  return -1;
};
