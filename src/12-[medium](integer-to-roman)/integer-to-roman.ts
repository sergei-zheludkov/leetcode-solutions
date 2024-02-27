const romeFigures = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const arabFigures = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

export const intToRoman = (numForConversion: number): string => {
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
};
