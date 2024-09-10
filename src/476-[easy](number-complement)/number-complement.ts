export const findComplement = (num: number): number => {
  const binary = num.toString(2);

  let res = '';

  for (let i = 0; i < binary.length; i++) {
    res = `${res}${Number(binary[i]) ? '0' : '1'}`;
  }

  return parseInt(res, 2);
};