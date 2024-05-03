export const equalPairs = (grid: number[][]): number => {
  const rows = new Map<string, number>();

  grid.forEach((row) => {
    const key = row.join('.');

    rows.set(key, (rows.get(key) ?? 0) + 1);
  });

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    let column = '';

    for (let j = 0; j < grid.length; j++) {
      column = `${column}.${grid[j][i]}`;
    }

    count += rows.get(column.slice(1)) ?? 0;
  }

  return count;
};
