import { licenseKeyFormatting } from './license-key-formatting';

test.each([
  { code: '2-5g-3-J', k: 2, expected: '2-5G-3J' },
  { code: '5F3Z-2e-9-w', k: 4, expected: '5F3Z-2E9W' },
  { code: '2id-5gsdmfo-3e-492J', k: 5, expected: '2-ID5GS-DMFO3-E492J' },
  { code: '2id-5gsdmfo-3e-492J', k: 3, expected: '2-ID5-GSD-MFO-3E4-92J' },
  { code: '2id-5gsdmfo-3e-492J', k: 1, expected: '2-I-D-5-G-S-D-M-F-O-3-E-4-9-2-J' },
  { code: '--a-a-a-a--', k: 2, expected: 'AA-AA' },
  { code: '---a-a-a-a---', k: 2, expected: 'AA-AA' },
])('license key formatting', ({ code, k, expected }) => {
  expect(licenseKeyFormatting(code, k)).toBe(expected);
});
