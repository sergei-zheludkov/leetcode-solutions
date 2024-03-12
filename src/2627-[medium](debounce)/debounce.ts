type F = (...args: number[]) => void

export const debounce = (fn: F, t: number): F => {
  let timeoutID: NodeJS.Timeout;

  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => fn(...args), t);
  };
};
