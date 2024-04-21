import { factorial } from '../helpers/factorial';

export const numTrees = (n: number): number => factorial(2 * n) / (factorial(n) * factorial(n + 1));
