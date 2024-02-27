export const addBinary = (a: string, b: string): string => {
  const stepCount = a.length > b.length ? a.length : b.length;

  let result = '';
  let carry = 0;

  for (let step = 1; step <= stepCount; step++) {
    const aNum = Number(a[a.length - step]) || 0;
    const bNum = Number(b[b.length - step]) || 0;
    const sum = aNum + bNum + carry;

    result = `${sum % 2}${result}`;
    carry = Math.floor(sum / 2);
  }

  return carry ? `${carry}${result}` : result;
};
