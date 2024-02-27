import { getRow } from '../119-[easy](pascals-triangle-II)/pascals-triangle-II';

export const generate = (numRows: number): number[][] => {
  if (numRows === 1) {
    return [[1]];
  }

  return [...generate(numRows - 1), getRow(numRows - 1)];
};

// Previous solution

// const generate = (numRows: number): number[][] => {
//   const newRow: number[] = [1];
//
//   if (numRows === 1) {
//     return [newRow];
//   }
//
//   const rows = generate(numRows - 1);
//   const lastRow = rows[rows.length - 1];
//
//   for (let index = 0; index < rows.length; index++) {
//     const current = lastRow[index];
//     const next = lastRow[index + 1] ?? 0;
//     const result = current + next;
//
//     newRow.push(result);
//   }
//
//   rows.push(newRow);
//
//   return rows;
// };

// const generate = (numRows: number): number[][] => {
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
// };

