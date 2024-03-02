export const fib = (n?: number): number => !n || n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
