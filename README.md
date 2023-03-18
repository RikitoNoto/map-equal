## Description
This library allows you to compare the Map instances.
but it is shallow compared, so can't compare nested objects.

## Installation
```bash
npm install map-equal --save
```

## Usage
```ts
import { mapEqual } from "map-equal";
mapEqual(new Map([[1,0]]), new Map([[1,0]])); // => true
mapEqual(new Map([[1,0]]), new Map([[1,1]])); // => false
mapEqual(new Map([[1,0]]), new Map([[2,0]])); // => false
mapEqual(new Map([["1",0]]), new Map([[1,0]])); // => false
mapEqual(new Map([[1,{}]]), new Map([[1,{}]])); // => false
```

