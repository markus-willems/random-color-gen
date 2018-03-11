import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  hexToHsl,
  hslToHex,
  hex,
  rgb,
  hsl,
} from '../';

// Test suite for hexToRgb(), rgbToHex(), rgbToHsl(), hslToRgb(), hexToHsl(), and hslToHex()
describe('converter suite', () => {
  it('should convert hex to dec', () => {
    expect(hexToRgb('#437f0c')).toEqual([67, 127, 12]);
  });

  it('should convert dec to hex', () => {
    expect(rgbToHex(67, 127, 12)).toEqual('#437f0c');
  });

  it('should convert rgb to hsl', () => {
    expect(rgbToHsl([45, 221, 22])).toEqual([113, '82%', '48%']);
  });

  it('should convert hsl to rgb', () => {
    expect(hslToRgb([123, '75%', '34%'])).toEqual([22, 152, 28]);
  });

  it('should convert hex to hsl', () => {
    expect(hexToHsl('#4f69bc')).toEqual([226, '45%', '52%']);
  });

  it('should convert hsl to hex', () => {
    expect(hslToHex([53, '49%', '57%'])).toEqual('#c7bb5c');
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

    expect(hsl1).not.toEqual(hsl2);
  });
});
