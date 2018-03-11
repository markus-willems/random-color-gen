# random-color-gen

A random color generator that generates colors in the hexadecimal format, RGB, and HSL mode. The library also provides functions for conversion between HEX, RGB, and HSL.

# Install

```sh
$ npm install random-color-gen
```

# Usage

```js
import {
  hex,
  rgb,
  hsl,
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  hexToHsl,
  hslToHex,
} from 'random-color-gen';

// Generate random colors
let hexColor = hex(); // '#4be1ce'
let rgbColor = rgb(); // [27, 225, 104]
let hslColor = hsl(); // [305, '47%', '81%']

// Convert colors
let hexToRgbColor = hexToRgb(hexColor); // [75, 225, 206]
let rgbToHexColor = rgbToHex(rgbColor); // '#1be168'
let rgbToHslColor = rgbToHsl(rgbColor); // [143, '79%', '49%']
let hslToRgbColor = hslToRgb(rgbToHslColor); // [26, 224, 102]
let hexToHslColor = hexToHsl(hexColor); // [143, '79%', '49%']
let hslToHexColor = hslToHex(rgbToHslColor); // '#1ae066'
```

## React example

```jsx
import React from 'react';
import { render } from 'react-dom';
import { hex, rgb, hsl } from 'random-color-gen';

const styles = {
  hex: {
    background: hex(),
  },
  rgb: {
    background: `rgb(${rgb()})`,
  },
  hsl: {
    background: `hsl(${hsl()})`,
  },
};

const App = () => {
  return (
    <div>
      <div style={styles.hex}>Hello HEX!</div>
      <div style={styles.rgb}>Hello RGB!</div>
      <div style={styles.hsl}>Hello HSL!</div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
```

Open in [CodeSandbox](https://codesandbox.io/s/j2o8z2py85).

# API

## `hex()` -> `string`

A function that generates a random 3-byte hexadecimal.

> hex() // '#4be1ce'

## `rgb()` -> `array`

A function that generates a random 3-element RGB array.

> rgb() // [27, 225, 104]

## `hsl()` -> `array`

A function that generates a random 3-element HSL array.

> hsl() // [89, '60%', '91%']

## `hexToRgb(hex: string)` -> `array`

A function that converts a 3-byte hexadecimal to a 3-element RGB array.

> hexToRgb('#4be1ce') // [75, 225, 206]

## `rgbToHex(rgb: Array<number | string>)` -> `string`

A function that converts a 3-element RGB array to a 3-byte hexadecimal.

> rgbToHex([75, 225, 206]) // '#1be168'

## `rgbToHsl(rgb: Array<number | string>)` -> `array`

A function that converts a 3-element RGB array to a 3-element HSL array.

> rgbToHsl([175, 52, 101]) // [336, '54%', '45%']

## `hslToRgb(hsl: array[number, string, string])` -> `array`

A function that converts a 3-element HSL array to a 3-element RGB array.

> hslToRgb([329, '25%', '77%']) // [211, 182, 197]

## `hexToHsl(hex: string)` -> `array`

A function that converts a 3-byte hexadecimal to a 3-element HSL array.

> hexToHsl('#b51a5e') // [334, '75%', '41%']

## `hslToHex(hsl: array[number, string, string])` -> `string`

A function that converts a 3-element HSL array to a 3-byte hexadecimal.

> hslToHex([301, '55%', '96%']) // '#faeffa'
