export const removeKdigits = (num: string, k: number): string => {
  if (num.length === k) {
    return '0';
  }

  const figures: string[] = [];

  for (let i = 0; i < num.length; i++) {
    while (figures[figures.length - 1] > num[i] && k) {
      figures.pop();
      k -= 1;
    }

    figures.push(num[i]);
  }

  if (k) {
    figures.splice(-k);
  }

  let checked = false;

  return figures.filter((n) => {
    if (n !== '0' || figures.length <= 1) {
      checked = true;
    }

    if (checked) {
      return n;
    }
  }).join('') || '0';
};