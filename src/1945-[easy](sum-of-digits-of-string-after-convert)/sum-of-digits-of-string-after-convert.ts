
export const getLucky = (s: string, k: number): number => {
  let num: number | string = '';

  for (let i = 0; i < s.length; i++) {
    num += (s[i].charCodeAt(0) - 96);
  }

  while (k) {
    num = num.toString()
      .split('')
      .reduce((acc, n) => acc + Number(n), 0);

    k--;
  }

  return num as number;
};
