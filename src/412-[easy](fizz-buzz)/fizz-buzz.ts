const isDivisible = (num: number, divisor: number) => num % divisor === 0;

export const fizzBuzz = (num: number): string[] => {
  const res: string[] = [];

  for (let i = 1; i <= num; i++) {
    if (isDivisible(i, 3) && isDivisible(i, 5)) {
      res.push('FizzBuzz');
      continue;
    }

    if (isDivisible(i, 3)) {
      res.push('Fizz');
      continue;
    }

    if (isDivisible(i, 5)) {
      res.push('Buzz');
      continue;
    }

    res.push(i.toString());
  }

  return res;
};
