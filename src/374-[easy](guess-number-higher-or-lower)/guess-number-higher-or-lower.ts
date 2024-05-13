type Guess = (n: number) => -1 | 0 | 1;

export const getGuess = (pick: number): Guess => (n) => {
  if (pick < n) {
    return -1;
  } else if (pick > n) {
    return 1;
  } else {
    return 0;
  }
};

export const guessNumber = (n: number, guess: Guess): number => {
  let start = 0;
  let end = n;
  let middle = Math.ceil(n / 2);

  while (guess(middle)) {
    if (guess(middle) === -1) {
      end = middle;
      middle = Math.ceil(end / 2);
    }

    if (guess(middle) === 1) {
      start = middle;
      middle = Math.ceil(middle + (end - start) / 2);
    }
  }

  return middle;
};
