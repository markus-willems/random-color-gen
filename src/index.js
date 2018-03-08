const hexToDec = (hex, ...args) => {
  if (args.length) {
    hex = [].concat(hex, ...args).join('');
  }
  if (Array.isArray(hex)) {
    hex = hex.reduce((a, b) => a + b);
  }
  if (hex.length === 3) {
    return hex
      .split('')
      .map(c => c + c)
      .map(byte => Number(`0x${byte}`).toString(10));
  } else if (hex.length === 6) {
    return hex.match(/.{1,2}/g).map(byte => Number(`0x${byte}`).toString(10));
  } else {
    return hex;
  }
};

const validateHexByte = hexByte => {
  if (hexByte.length < 2) {
    return `0${hexByte}`;
  }
  return hexByte;
};

const decToHex = (dec, ...args) => {
  if (args.length) {
    dec = [].concat(dec, ...args);
  }
  if (Array.isArray(dec) && dec.length) {
    return dec
      .map(
        d => (Number(d) < 256 ? validateHexByte(Math.abs(d).toString(16)) : 0),
      )
      .reduce((a, b) => a + b);
  } else {
    return dec;
  }
};

const hex = () => {};
const rgb = () => {};
const hsl = () => {};

export { hex, rgb, hsl, decToHex, hexToDec };
