# Combs [![npm](https://img.shields.io/npm/v/@nem035/combs.svg?style=flat-square)](https://www.npmjs.com/package/@nem035/combs)

Simple utility to generate all combinations for a given array.

Note: order doesn't matter, `["a", "b"]` and `["b", "a"]` are the same combination.

## Usage

```js
const combs = require("@nem035/combs");

const res = combs(["a", "b", "c"]);
/*
[
  ["a"],
  ["b"],
  ["c"],
  ["a", "b"],
  ["a", "c"],
  ["b", "c"],
  ["a", "b", "c"],
]
*/
```

Doesn't matter what's in the array:

```js
const combs = require("@nem035/combs");

const res = combs(["a", 2, { value: "hi" }]);
/*
[
  ["a'],
  [2],
  [{ value: "hi' }],
  ["a', 2],
  ["a', { value: "hi' }],
  [2, { value: "hi' }],
  ["a', 2, { value: "hi' }]
]
*/
```

## Installation

```sh
# npm
npm i @nem035/combs

# yarn
yarn add @nem035/combs
```

## Licence

MIT
