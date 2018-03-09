# random-color-gen

A random color generator that creates colors in the hexadecimal format and RGB mode.

# Install

```sh
$ npm install random-color-gen
```

# Usage

```
import { hex, rgb, hexToDec, decToHex } from 'random-color-gen';

let hexColor = hex(); // '#4be1ce'
let rgbColor = rgb(); // ['27', '225', '104']

let hexToDecColor = hexToDec(hexColor); // [ '75', '225', '206' ]
let decToHexColor = decToHex(rgbColor); // '#1be168'
```

# API

## `hex()` -> `string`

A function that generates a random 3-byte hexadecimal.

> hex() // '#4be1ce'

## `rgb()` -> `array`

A function that generates a random 3-element RGB array.

> rgb() // ['27', '225', '104']

## `hexToDec(hex: string)` -> `array`

A function that converts a 3-byte hexadecimal to a 3-element RGB array.

> hexToDec('#4be1ce') // ['75', '225', '206']

## `decToHex(dec: Array<number | string>)` -> `string`

A function that converts a 3-element RGB array to a 3-byte hexadecimal.

> decToHex(['75', '225', '206']) // '#1be168'
