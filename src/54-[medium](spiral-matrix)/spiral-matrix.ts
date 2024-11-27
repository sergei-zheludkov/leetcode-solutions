export const spiralOrder = (matrix: number[][]): number[] => {
  const res: number[] = [];

  let
    minI = 0,
    maxI = matrix.length,
    minJ = 0,
    maxJ = matrix[0].length,
    i = 0,
    j = 0,
    direction: 'left' | 'right' | 'up' | 'down' = 'right';

  while (res.length < matrix.length * matrix[0].length) {
    // console.log(
    //   '\n', 'min:', { i: minI, j: minJ  },
    //   '\n', 'max:', { i: maxI, j: maxJ  },
    //   '\n', 'indexes:', { i, j },
    //   '\n', 'direction:', direction,
    //   '\n', 'num:', matrix[i][j],
    // );

    res.push(matrix[i][j]);

    switch (direction) {
      case 'right': {
        if (j + 1 < maxJ) {
          j++;
        } else {
          minI++;
          direction = 'down';
          i++;
        }
        break;
      }
      case 'down': {
        if (i + 1 < maxI) {
          i++;
        } else {
          maxJ--;
          direction = 'left';
          j--;
        }
        break;
      }
      case 'left': {
        if (j - 1 >= minJ) {
          j--;
        } else {
          maxI--;
          direction = 'up';
          i--;
        }
        break;
      }
      case 'up': {
        if (i - 1 >= minI) {
          i--;
        } else {
          minJ++;
          direction = 'right';
          j++;
        }
        break;
      }
    }
  }

  // console.log('RESULT:', JSON.stringify(res));
  return res;
};
