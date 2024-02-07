// link to problem: https://leetcode.com/problems/add-binary

const test1_a = "11";
const test1_b = "1";

const test2_a = "1010";
const test2_b = "1011";

const test3_a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const test3_b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

const test4_a = "10101110";
const test4_b = "1100";

function addBinary(a: string, b: string): string {
  const stepCount = a.length > b.length ? a.length : b.length;

  let result = "";
  let carry = 0;

  for (let step = 1; step <= stepCount; step++) {
    const aNum = Number(a[a.length - step]) || 0;
    const bNum = Number(b[b.length - step]) || 0;
    const sum = aNum + bNum + carry;

    result = `${sum % 2}${result}`
    carry = Math.floor(sum / 2)
  }

  return carry ? `${carry}${result}` : result;
}


console.log(`test 1: \n a: ${test1_a} \n b: ${test1_b} \n Expected: 100 \n Output: ${addBinary(test1_a, test1_b)}`);
console.log(`test 2: \n a: ${test2_a} \n b: ${test2_b} \n Expected: 10101 \n Output: ${addBinary(test2_a, test2_b)}`);
console.log(`test 3: \n Expected: 110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000 \n Output: ${addBinary(test3_a, test3_b)}`);
console.log(`test 4: \n a: ${test4_a} \n b: ${test4_b} \n Expected: 10111010 \n Output: ${addBinary(test4_a, test4_b)}`);


export { addBinary };
