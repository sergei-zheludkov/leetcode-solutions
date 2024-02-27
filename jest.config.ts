import type { Config } from 'jest';

const config: Config = {
  moduleDirectories: ['node_modules'],
  modulePathIgnorePatterns: ['node_modules'],
  bail: false,
};

export default config;
