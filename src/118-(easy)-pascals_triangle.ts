// link to problem: https://leetcode.com/problems/pascals-triangle

const test1_num_rows = 15;
const test2_num_rows = 1;

function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }

  if (numRows === 2) {
    return [[1],[1,1]];
  }

  const rows = generate(numRows - 1);
  const lastRow = rows[rows.length - 1];
  const newRow: number[] = [1];

  for (let index = 0; index < rows.length; index++) {
    const current = lastRow[index];
    const next = lastRow[index + 1] ?? 0;
    const result = current + next;

    newRow.push(result);
  }

  rows.push(newRow);

  return rows;
}

// Previous solution

// function generate(numRows: number): number[][] {
//   if (numRows === 1) {
//     return [[1]];
//   }
//
//   if (numRows === 2) {
//     return [[1],[1,1]];
//   }
//
//   const rows = generate(numRows - 1);
//   const lastRow = rows[rows.length - 1];
//
//   const newRow = lastRow.reduce<number[]>((acc, elem, index ) => {
//     const item = elem + (lastRow[index + 1] ?? 0);
//     if (index === 0) {
//       acc.push(elem, item);
//     } else {
//       acc.push(item);
//     }
//     return acc;
//   }, [])
//
//   return [...rows, newRow];
// }

console.log('test_1: => [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', generate(test1_num_rows));
console.log('test_2: => [[1]]', generate(test2_num_rows));

export { generate };