export const asteroidCollision = (asteroids: number[]): number[] => {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    while (stack.length && asteroids[i] < 0 && stack[stack.length - 1] > 0) {
      const diff = asteroids[i] + stack[stack.length - 1];

      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        asteroids[i] = 0;
      } else {
        asteroids[i] = 0;
        stack.pop();
      }
    }

    if (asteroids[i]) {
      stack.push(asteroids[i]);
    }
  }

  return stack;
};
