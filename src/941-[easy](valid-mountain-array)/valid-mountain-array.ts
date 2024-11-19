export const validMountainArray = (arr: number[]): boolean => {
  const N = arr.length-1;
  let i = 0;

  while (i+1 < N && arr[i] < arr[i+1]) i++;

  if (i === 0 || i === N) return false;

  while (i+1 < N + 1 && arr[i] > arr[i+1]) i++;

  return i === N;
};


// export const validMountainArray = (arr: number[]): boolean => {
//   if (arr.length < 3 || arr[0] > arr[1]) {
//     return false;
//   }
//
//   let down = false;
//
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i-1] === arr[i]) {
//       return false;
//     }
//
//     if (!down && arr[i-1] > arr[i]) {
//       down = true;
//     }
//
//     if (down && arr[i-1] <= arr[i]) {
//       return false;
//     }
//   }
//
//   return down && true;
// };
