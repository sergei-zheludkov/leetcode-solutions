export const findDiagonalOrder = (mat: number[][]): number[] => {
  const res: number[] = [];

  const maxI = mat.length - 1, maxJ = mat[0].length - 1;
  let i = 0, j = 0, direction = 1; // 0 = down | 1 = up

  while (i < mat.length && j < mat[0].length) {
    res.push(mat[i][j]);

    if (i === maxI && j === maxJ) {
      break;
    }

    if (direction) {
      if (j === maxJ) {
        i++;
        direction = 0;
      } else if (i - 1 >= 0 && j + 1 <= maxJ) {
        i--;
        j++;
      } else if (j + 1 <= maxJ) {
        j++;
        direction = 0;
      } else if (i - 1 >= 0) {
        i--;
        direction = 0;
      }
    } else {
      if (i + 1 <= maxI && j - 1 >= 0) {
        i++;
        j--;
      } else if (i + 1 <= maxI) {
        i++;
        direction = 1;
      } else if (j + 1 <= maxJ) {
        j++;
        direction = 1;
      }
    }
  }

  return res;
};


// PREV SOLUTION
//
// const isNum = (elem: unknown) => elem !== undefined;
//
// export const findDiagonalOrder = (mat: number[][]): number[] => {
//   const res: number[] = [];
//
//   const maxI = mat.length - 1, maxJ = mat[0].length - 1;
//   let i = 0, j = 0, direction = 0; // 0 = down | 1 = up
//
//   res.push(mat[i][j]);
//
//   if (!isNum(mat[i][j + 1]) && !isNum(mat[i + 1]?.[j])) {
//     return res;
//   } else if (isNum(mat[i][j + 1])) {
//     j++;
//   } else if (isNum(mat[i + 1]?.[j])) {
//     i++;
//
//     while (i < mat.length) {
//       res.push(mat[i][j]);
//       i++;
//     }
//   }
//
//   while (i < mat.length && j < mat[0].length) {
//     // console.log(
//     //   '\n', 'max:', { i: maxI, j: maxJ  },
//     //   '\n', 'indexes:', { i, j  },
//     //   '\n', 'direction:', direction === 0 ? 'down' : 'up',
//     //   '\n', 'num:', mat[i][j],
//     // );
//
//     res.push(mat[i][j]);
//
//     if (i === mat.length - 1 && j === mat[0].length - 1) {
//       break;
//     }
//
//     if (direction) {
//       if (j === maxJ) {
//         i++;
//         direction = 0;
//       } else if (isNum(mat[i - 1]?.[j + 1])) {
//         i--;
//         j++;
//       } else if (isNum(mat[i]?.[j + 1])) {
//         j++;
//         direction = 0;
//       } else if (isNum(mat[i - 1]?.[j])) {
//         i--;
//         direction = 0;
//       }
//     } else {
//       if (isNum(mat[i + 1]?.[j - 1])) {
//         i++;
//         j--;
//       } else if (isNum(mat[i + 1]?.[j])) {
//         i++;
//         direction = 1;
//       } else if (isNum(mat[i]?.[j + 1])) {
//         j++;
//         direction = 1;
//       }
//     }
//   }
//
//   return res;
// };
//
