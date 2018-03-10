# random-color-gen

A random color generator that creates colors in the hexadecimal format, RGB, and HSL mode.

# Install

```sh
$ npm install random-color-gen
```

# Usage

```js
import { hex, rgb, hsl, hexToDec, decToHex } from 'random-color-gen';

// Generate random colors
let hexColor = hex(); // '#4be1ce'
let rgbColor = rgb(); // ['27', '225', '104']
let hslColor = hsl(); // [305, '47%', '81%']

// Convert colors
let hexToDecColor = hexToDec(hexColor); // [ '75', '225', '206' ]
let decToHexColor = decToHex(rgbColor); // '#1be168'
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

> rgb() // ['27', '225', '104']

## `hsl()` -> `array`

A function that generates a random 3-element HSL array.

> hsl() // [89, '60%', '91%']

## `hexToDec(hex: string)` -> `array`

A function that converts a 3-byte hexadecimal to a 3-element RGB array.

> hexToDec('#4be1ce') // ['75', '225', '206']

## `decToHex(dec: Array<number | string>)` -> `string`

A function that converts a 3-element RGB array to a 3-byte hexadecimal.

> decToHex(['75', '225', '206']) // '#1be168'
