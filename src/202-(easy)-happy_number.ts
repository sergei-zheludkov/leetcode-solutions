// link to problem: https://leetcode.com/problems/happy-number

const test1_num = 19;
const test2_num = 2;
const test3_num = 33;
const test4_num = 11;
const test5_num = 15;
const test6_num = 28;
const test7_num = 101;
const test8_num = 77;
const test9_num = 1977;
const test10_num = 23;
const test11_num = 6668;

function isHappy(n: number): boolean {
  const collection = new Set<number>();

  let sum = n.toString();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const newSum = sum.split('')
      .reduce((acc, num) => Number(num) ** 2 + acc, 0);

    if (newSum === 1) {
      return true;
    }

    if (collection.has(newSum)) {
      return false;
    }

    collection.add(newSum);
    sum = newSum.toString();
  }
}

console.log('test1: | 19 |\n EXPECTED:  true \n OUTPUT:', isHappy(test1_num));
console.log('test2: | 2 |\n EXPECTED: false \n OUTPUT:', isHappy(test2_num));
console.log('test3: | 33 |\n EXPECTED: false \n OUTPUT:', isHappy(test3_num));
console.log('test4: | 11 |\n EXPECTED: false \n OUTPUT:', isHappy(test4_num));
console.log('test5: | 15 |\n EXPECTED: false \n OUTPUT:', isHappy(test5_num));
console.log('test6: | 28 |\n EXPECTED:  true \n OUTPUT:', isHappy(test6_num));
console.log('test7: | 101 |\n EXPECTED: false \n OUTPUT:', isHappy(test7_num));
console.log('test8: | 77 |\n EXPECTED: false \n OUTPUT:', isHappy(test8_num));
console.log('test9: | 1977 |\n EXPECTED: false \n OUTPUT:', isHappy(test9_num));
console.log('test10: | 23 |\n EXPECTED:  true \n OUTPUT:', isHappy(test10_num));
console.log('test11: | 6668 |\n EXPECTED:  false \n OUTPUT:', isHappy(test11_num));
