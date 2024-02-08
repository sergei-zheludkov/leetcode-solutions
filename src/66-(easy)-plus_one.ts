// link to problem: https://leetcode.com/problems/plus-one

const test1_arr = [1,2,3];
const test2_arr = [4,3,2,1];
const test3_arr = [9,9,9];
const test4_arr = [8,9,9,9];

function plusOne(digits: number[]): number[] {
  let carry = 1;

  for (let step = digits.length - 1; step >= 0; step--) {
    const num = digits[step] + carry;

    if (num > 9) {
      digits[step] = 0
      carry = 1;
    } else  {
      digits[step] = num;
      carry = 0
    }
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
}

console.log(`test 1: \n Expected: [1,2,4] \n Output: ${plusOne(test1_arr)}`);
console.log(`test 2: \n Expected: [4,3,2,1] \n Output: ${plusOne(test2_arr)}`);
console.log(`test 3: \n Expected: [1,0,0,0] \n Output: ${plusOne(test3_arr)}`);
console.log(`test 4: \n Expected: [9,0,0,0] \n Output: ${plusOne(test4_arr)}`);

export { plusOne };
