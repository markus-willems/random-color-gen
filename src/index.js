// Converts a 3-byte hexadecimal to a 3-element RGB array
const hexToRgb = (hex, ...args) => {
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
      .map(byte => Number(Number(`0x${byte}`).toString(10)));
  } else if (hex.length === 6) {
    return hex
      .match(/.{1,2}/g)
      .map(byte => Number(Number(`0x${byte}`).toString(10)));
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

// Converts a 3-element RGB array to a 3-byte hexadecimal
const rgbToHex = (rgb, ...args) => {
  if (args.length) {
    rgb = [].concat(rgb, ...args);
  }
  if (Array.isArray(rgb) && rgb.length) {
    return (
      '#' +
      rgb
        .map(
          d =>
            Number(d) < 256 ? validateHexByte(Math.abs(d).toString(16)) : 0,
        )
        .reduce((a, b) => a + b)
    );
  } else {
    return rgb;
  }
};

// Converts a 3-element RGB array to a 3-element HSL array
const rgbToHsl = (rgb, mode = 'CSS', f = Math.round) => {
  if (rgb.length != 3) {
    return rgb;
  }
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  let min = Math.min(r, g, b);
  let max = Math.max(r, g, b);
  let c = max - min;

  let x;
  if (!c) {
    x = 0;
  } else if (max == r) {
    x = (g - b) / c;
    if (g < b) {
      x += 6;
    }
  } else if (max == g) {
    x = 2 + (b - r) / c;
  } else {
    x = 4 + (r - g) / c;
  }
  let h = 60 * x;
  let l = (max + min) / 2;

  let s = 0;
  if (l != 1) {
    s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  if (mode == 'CSS') {
    return [f(h), `${f(s * 100)}%`, `${f(l * 100)}%`];
  } else {
    return [h, s, l];
  }
};

// Check and normalize n (h or s & l)
const validateHsl = (n, type = '%') => {
  if (type == '%') {
    n = n.includes('%') ? n.replace('%', '') : n;
    return n / 100;
  } else {
    return n / 360;
  }
};

// Convert a 3-element RGB array to a 3-element HSL array
const hslToRgb = hsl => {
  let r, g, b, h, s, l, x1, x2;

  if (hsl.length != 3) {
    return hsl;
  }

  h = validateHsl(hsl[0], null);
  s = validateHsl(hsl[1]);
  l = validateHsl(hsl[2]);

  if (s == 0) {
    r = g = b = l;
  } else {
    const calc = (x1, x2, c) => {
      if (c < 0) {
        c += 1;
      }
      if (c > 1) {
        c -= 1;
      }
      if (c < 1 / 6) {
        return x2 + (x1 - x2) * 6 * c;
      }
      if (c < 1 / 2) {
        return x1;
      }
      if (c < 2 / 3) {
        return x2 + (x1 - x2) * (2 / 3 - c) * 6;
      }
      return x2;
    };

    if (l < 0.5) {
      x1 = l * (1 + s);
    } else {
      x1 = l + s - l * s;
    }
    x2 = 2 * l - x1;

    r = Math.round(calc(x1, x2, h + 1 / 3) * 255);
    g = Math.round(calc(x1, x2, h) * 255);
    b = Math.round(calc(x1, x2, h - 1 / 3) * 255);
  }

  return [r, g, b];
};

// Converts a 3-byte hexadecimal to a 3-element HSL array
const hexToHsl = hex => rgbToHsl(hexToRgb(hex));

// Converts a 3-element HSL array to a 3-byte hexadecimal
const hslToHex = hsl => rgbToHex(hslToRgb(hsl));

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

export {
  hex,
  rgb,
  hsl,
  rgbToHex,
  hexToRgb,
  rgbToHsl,
  hslToRgb,
  hexToHsl,
  hslToHex,
};
