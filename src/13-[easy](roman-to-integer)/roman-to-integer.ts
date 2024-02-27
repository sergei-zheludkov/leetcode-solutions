const symbols: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

export const romanToInt = (roma_str: string): number => {
  let result = 0;

  for (let step = 0; step < roma_str.length; step++) {
    const cur = roma_str[step];
    const next = roma_str[step + 1];

    const isComplicated = (cur === 'C' && (next === 'D' || next === 'M'))
      || (cur === 'X' && (next === 'L' || next === 'C'))
      || (cur === 'I' && (next === 'V' || next === 'X'));

    if (isComplicated) {
      result += (symbols[next] - symbols[cur]);
      step++;

      continue;
    }

    if (cur in symbols) {
      result += symbols[cur];
    }
  }

  return result;
};
