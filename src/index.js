// Converts a 3-byte hexadecimal to the decimal representation
const hexToDec = (hex, ...args) => {
  if (args.length) {
    hex = [].concat(hex, ...args).join('');
  }
  if (Array.isArray(hex)) {
    hex = hex.reduce((a, b) => a + b);
  }
  if (hex.startsWith('#')) {
    hex = hex.substr(1, hex.length);
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

// Prepend a '0' if 'hexByte' is a single character (e.g. f, c, 3, ...)
const validateHexByte = hexByte => {
  if (hexByte.length < 2) {
    return `0${hexByte}`;
  }
  return hexByte;
};

// Converts decimal triplet to the hexadecimal representation
const decToHex = (dec, ...args) => {
  if (args.length) {
    dec = [].concat(dec, ...args);
  }
  if (Array.isArray(dec) && dec.length) {
    return (
      '#' +
      dec
        .map(
          d =>
            Number(d) < 256 ? validateHexByte(Math.abs(d).toString(16)) : 0,
        )
        .reduce((a, b) => a + b)
    );
  } else {
    return dec;
  }
};

// Generates a random 3-byte hexadecimal (string)
const hex = () => {
  return `#${[...Array(3)]
    .map(_ => validateHexByte(Math.floor(Math.random() * 256).toString(16)))
    .reduce((a, b) => a + b)}`;
};

// Generates a random rgb combo (array)
const rgb = () => {
  return [...Array(3)].map(_ => Math.floor(Math.random() * 256));
};

// Generates a random hsl combo (array)
const hsl = () => {
  return [...Array(3)].map(
    (_, i) =>
      !i
        ? Math.floor(Math.random() * 361)
        : `${Math.floor(Math.random() * 101)}%`,
  );
};

export { hex, rgb, hsl, decToHex, hexToDec };
