type F = (...args: number[]) => void;

export const throttle = (fn: F, t: number): F => {
  let timeoutId: NodeJS.Timeout | null = null;
  let nextCallArgs: number[] | null = null;

  const timeoutCallback = () => {
    if (!nextCallArgs) {
      timeoutId = null;
    } else {
      fn(...nextCallArgs);
      nextCallArgs = null;
      timeoutId = setTimeout(timeoutCallback, t);
    }
  };

  return (...args) => {
    if (timeoutId) {
      nextCallArgs = args;
    } else {
      fn(...args);
      timeoutId = setTimeout(timeoutCallback, t);
    }
  };
};

// PREVIOUS SOLUTION

// export const throttle = (fn: F, t: number): F => {
//   let nextCallArgs: number[] | null = null;
//   let timeoutId: NodeJS.Timeout | null = null;
//
//   return (...args) => {
//     if (!timeoutId) {
//       fn(...args);
//
//       timeoutId = setInterval(() => {
//         if (nextCallArgs) {
//           fn(...nextCallArgs);
//
//           nextCallArgs = null;
//         } else {
//           if (timeoutId) {
//             clearInterval(timeoutId);
//           }
//
//           timeoutId = null;
//         }
//       }, t);
//     } else {
//       nextCallArgs = args;
//     }
//   };
// };

