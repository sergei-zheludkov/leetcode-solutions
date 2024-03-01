const getLineNums = (line: string[]) => line.filter((char) => char !== '.');
const containDuplicate = (line: string[]) => new Set<string>(line).size !== line.length;
const isDivisibleBy3 = (num: number): boolean => !(num % 3);

export const isValidSudoku = (board: string[][]): boolean => {
  for (let line = 0; line < 9; line++) {
    if (containDuplicate(getLineNums(board[line]))) {
      return false;
    }

    const column: string[] = [];

    for (let index = 0; index < 9; index++) {
      column.push(board[index][line]);
    }

    if (containDuplicate(getLineNums(column))) {
      return false;
    }
  }

  for (let column = 0; column < 3; column++) {
    const square: string[] = [];

    for (let line = 0; line < 9; line++) {
      square.push(...board[line].splice(0,3));

      if (isDivisibleBy3(line + 1)) {

        if (containDuplicate(getLineNums(square))) {
          return false;
        }

        square.length = 0;
      }
    }
  }

  return true;
};

// export const isValidSudoku = (board: string[][]): boolean => {
//   for (let line = 0; line < 9; line++) {
//     if (containDuplicate(getLineNums(board[line]))) {
//       return false;
//     }
//
//     const column: string[] = [];
//
//     for (let index = 0; index < 9; index++) {
//       column.push(board[index][line]);
//     }
//
//     if (containDuplicate(getLineNums(column))) {
//       return false;
//     }
//   }
//
//   for (let column = 0; column < 3; column++) {
//     const square: string[] = [];
//
//     for (let line = 0; line < 9; line++) {
//       square.push(...board[line].splice(0,3));
//
//       if (isDivisibleBy3(line + 1)) {
//
//         if (containDuplicate(getLineNums(square))) {
//           return false;
//         }
//
//         square.length = 0;
//       }
//     }
//   }
//
//   return true;
// };

// export const isValidSudoku = (board: string[][]): boolean => {
//   const lines: string[][] = board.map(getLineNums);
//
//   for (let column = 0; column < 9; column++) {
//     const line: string[] = [];
//
//     for (let index = 0; index < 9; index++) {
//       line.push(board[index][column]);
//     }
//
//     lines.push(getLineNums(line));
//   }
//
//   for (let column = 0; column < 3; column++) {
//     const square: string[] = [];
//
//     for (let line = 0; line < 9; line++) {
//       square.push(...board[line].splice(0,3));
//
//       if (isDivisibleBy3(line + 1)) {
//         lines.push(getLineNums(square));
//         square.length = 0;
//       }
//     }
//   }
//
//   return !lines.some(containDuplicate);
// };