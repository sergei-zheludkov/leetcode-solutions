// link to problem: https://leetcode.com/problems/pascals-triangle-ii

const test1_row_index = 3;
const test2_row_index = 0;
const test3_row_index = 1;

function getRow(numRows: number): number[] {
  if (numRows === 0) {
    return [1];
  }

  if (numRows === 1) {
    return [1,1];
  }

  const lastRow = getRow(numRows - 1);
  const newRow: number[] = [1];

  for (let index = 0; index < lastRow.length; index++) {
    const current = lastRow[index];
    const next = lastRow[index + 1] ?? 0;
    const result = current + next;

    newRow.push(result);
  }

  return newRow;
}

// function getRow(rowIndex: number): number[] {
//   return generate(rowIndex + 1).pop() || [];
// }

console.log('test_1: => 1,3,3,1', getRow(test1_row_index));
console.log('test_2: => 1', getRow(test2_row_index));
console.log('test_3: => 1,1', getRow(test3_row_index));


export { getRow };
