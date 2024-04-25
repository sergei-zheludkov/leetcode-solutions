export const clumsy = (n: number): number => {
  const operands: number[] = [];

  operands.push(n--);

  let operation = 0;

  while (n) {
    if (operation === 0) {
      operands.push((operands.pop() ?? 1) * n);
    } else if (operation === 1) {
      const operand = operands.pop() ?? 1;
      const result = Math.floor(Math.abs(operand / n));
      operands.push(operand < 0 ? -result : result);
    } else if (operation === 2) {
      operands.push(n);
    } else {
      operands.push(-n);
    }
    operation = ((operation + 1) % 4);
    n--;
  }

  let result = 0;

  for (const operand of operands) {
    result += operand;
  }

  return result;
};

// export const clumsy = (n: number): number => {
//   const nums: number[] = [];
//
//   while (n) {
//     nums.push(n--);
//   }
//
//   const operands: number[] = [];
//   let num = 0;
//
//   for (let i = 0, p = 0; i < nums.length; i++, p = p < 3 ? p + 1 : 0) {
//     if (p === 3) {
//       continue;
//     }
//
//     if (p === 0) {
//       num = nums[i] * (nums[i + 1] ?? 1);
//       continue;
//     }
//
//     if (p === 1) {
//       num = Math.floor(num / (nums[i + 1] ?? 1));
//       continue;
//     }
//
//     if (p === 2) {
//       operands.push(-num);
//       operands.push(nums[i + 1] ?? 0);
//       num = 0;
//     }
//   }
//
//   if (num) {
//     operands.push(-num);
//   }
//
//   return operands.reduce((acc, sub, i) => acc + (i === 0 ? Math.abs(sub) : sub), 0);
// };