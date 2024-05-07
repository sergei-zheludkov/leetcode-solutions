const limit = Math.pow(2,31);

export const reverse = (x: number): number => {
  const result = Number(
    Math.abs(x)
      .toString()
      .split('')
      .reverse()
      .join(''),
  ) * Math.sign(x);

  return (result <= -limit || result > limit) ? 0 : result;
};
