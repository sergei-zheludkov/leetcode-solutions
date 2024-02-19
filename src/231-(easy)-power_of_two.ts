// link to problem: https://leetcode.com/problems/power-of-two

const test1_num = 1;
const test2_num = 16;
const test3_num = 3;
const test4_num = 64;
const test5_num = 55;
const test6_num = 256;

const isPowerOfTwo = (n: number): boolean => {
  if (n < 1) {
    return false;
  }

  return !(n & (n - 1));
}

console.log(`test1: \nNUM ${test1_num} \n EXPECTED: true \n OUTPUT:`, isPowerOfTwo(test1_num));
console.log(`test2: \nNUM ${test2_num} \n EXPECTED: true \n OUTPUT:`, isPowerOfTwo(test2_num));
console.log(`test3: \nNUM ${test3_num} \n EXPECTED: false \n OUTPUT:`, isPowerOfTwo(test3_num));
console.log(`test4: \nNUM ${test4_num} \n EXPECTED: false \n OUTPUT:`, isPowerOfTwo(test4_num));
console.log(`test5: \nNUM ${test5_num} \n EXPECTED: false \n OUTPUT:`, isPowerOfTwo(test5_num));
console.log(`test6: \nNUM ${test6_num} \n EXPECTED: false \n OUTPUT:`, isPowerOfTwo(test6_num));

export { isPowerOfTwo };
