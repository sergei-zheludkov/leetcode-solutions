export const getRow = (numRows: number): number[] => {
  const newRow: number[] = [1];

  if (numRows === 0) {
    return newRow;
  }

  const lastRow = getRow(numRows - 1);

  for (let index = 0; index < lastRow.length; index++) {
    const current = lastRow[index];
    const next = lastRow[index + 1] ?? 0;
    const result = current + next;

    newRow.push(result);
  }

  return newRow;
};
