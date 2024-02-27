export const plusOne = (digits: number[]): number[] => {
  let carry = 1;

  for (let step = digits.length - 1; step >= 0; step--) {
    const num = digits[step] + carry;

    if (num > 9) {
      digits[step] = 0;
      carry = 1;
    } else  {
      digits[step] = num;
      carry = 0;
    }
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
};
