export const bagOfTokensScore = (tokens: number[], power: number): number => {
  tokens.sort((a, b) => a - b);

  let score = 0;
  let i  = 0;
  let j = tokens.length - 1;

  while (i <= j) {
    const left = tokens[i];
    const right = tokens[j];

    if (i === j) {
      if (power >= left) {
        power -= left;
        score++;
      }
      return score;
    }

    if (power >= left) {
      power -= left;
      score++;
      i++;
    } else if (score) {
      power += right;
      score--;
      j--;
    } else {
      break;
    }
  }

  return score;
};
