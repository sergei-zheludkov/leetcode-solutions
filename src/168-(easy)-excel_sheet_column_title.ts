// link to problem: https://leetcode.com/problems/excel-sheet-column-title

const test1_digits = 1;
const test2_digits = 28;
const test3_digits = 701;
const test4_digits = 10002;
const test5_digits = 100020;
const test6_digits = 123820;

const BASE = 65;
const MAX_LETTER_NUM = 26;

const getLetter = (num: number) => String.fromCharCode(BASE + num);

const convertToTitle = (columnNumber: number): string => {
  if (columnNumber === 0) {
    return "";
  }

  const divider = (columnNumber - 1) % MAX_LETTER_NUM;
  const newColumnNumber = Math.floor((columnNumber - 1) / MAX_LETTER_NUM);

  return `${convertToTitle(newColumnNumber)}${getLetter(divider)}`;
};

console.log(`test1: ${test1_digits} \n EXPECTED: "A" \n OUTPUT:`, convertToTitle(test1_digits));
console.log(`test2: ${test2_digits} \n EXPECTED: "AB" \n OUTPUT:`, convertToTitle(test2_digits));
console.log(`test3: ${test3_digits} \n EXPECTED: "ZY" \n OUTPUT:`, convertToTitle(test3_digits));
console.log(`test4: ${test4_digits} \n EXPECTED: "NTR" \n OUTPUT:`, convertToTitle(test4_digits));
console.log(`test5: ${test5_digits} \n EXPECTED: "EQXX" \n OUTPUT:`, convertToTitle(test5_digits));
console.log(`test6: ${test6_digits} \n EXPECTED: "GADH" \n OUTPUT:`, convertToTitle(test6_digits));

export { convertToTitle };
