import { hexToDec, decToHex, hex, rgb, hsl } from '../';

// Test suite for hexToDec() and decToHex()
describe('converter suite', () => {
  it('should convert hex to dec', () => {
    expect(hexToDec('#437f0c').join('')).toBe([67, 127, 12].join(''));
  });

  it('should convert dec to hex', () => {
    expect(decToHex(67, 127, 12)).toBe('#437f0c');
  });
});

// Test suite for hex()
describe('hex triplet generator suite', () => {
  it('should return a string', () => {
    expect(typeof hex()).toBe('string');
  });

  it('should generate a random hex triplet', () => {
    let hex1 = hex();
    let hex2 = hex();

    expect(hex1).not.toBe(hex2);
  });
});

// Test suite for rgb()
describe('rgb generator suite', () => {
  it('should return an array', () => {
    expect(Array.isArray(rgb())).toBe(true);
  });

  it('should generate a random rgb array', () => {
    let rgb1 = rgb();
    let rgb2 = rgb();

    expect(rgb1.join('')).not.toBe(rgb2.join(''));
  });
});

// Test suite for hsl()
describe('hsl generator suite', () => {
  it('should return an array', () => {
    expect(Array.isArray(hsl())).toBe(true);
  });

  it('should generate a random hsl array', () => {
    let hsl1 = hsl();
    let hsl2 = hsl();

    expect(hsl1.join('')).not.toBe(hsl2.join(''));
  });
});
