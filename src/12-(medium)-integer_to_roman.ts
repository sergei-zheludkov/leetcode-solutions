// link to problem: https://leetcode.com/problems/integer-to-roman

const roma_num_1 = 3;
const roma_num_2 = 58;
const roma_num_3 = 1994;
const roma_num_4 = 3999;

const romeFigures = ['M', "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const arabFigures = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function intToRoman(numForConversion: number): string {
  let count = numForConversion;
  let result = '';

  for (let index = 0; index < arabFigures.length; index++) {
    const arabFigure = arabFigures[index];
    const floorDivider = Math.floor(count / arabFigure);

    if (floorDivider > 0) {
      result = `${result}${romeFigures[index].repeat(floorDivider)}`;
      count -= arabFigure * floorDivider;
    }
  }

  return result;
}

console.log('test_1: \n EXPECTED: III \n OUTPUT:  ', intToRoman(roma_num_1));
console.log('test_2: \n EXPECTED: LVIII \n OUTPUT:  ', intToRoman(roma_num_2));
console.log('test_3: \n EXPECTED: MCMXCIV \n OUTPUT:  ', intToRoman(roma_num_3));
console.log('test_4: \n EXPECTED: MMMCMXCIX \n OUTPUT:  ', intToRoman(roma_num_4));