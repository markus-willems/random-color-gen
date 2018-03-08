import { hexToDec, decToHex } from '../../lib/';

it('should convert hex to dec', () => {
  expect(hexToDec('437f0c').join('')).toBe([67, 127, 12].join(''));
});

it('should convert dec to hex', () => {
  expect(decToHex(67, 127, 12)).toBe('437f0c');
});
