# extend

Deep extend micro library in ES6

## Installation

- `npm i --save opudalo/extend`  
or  
- `bower i --save opudalo/extend`

## API

### extend(object, object...)

  Deep extends an object with another object's properties.

## Examples

```js
import extend from 'extend'

let obj = { a: 1, b: 5 } 
extend(obj, { c: 3, b: { a: 1 } })
/* 
obj now is {a: 1, c: 3, b: { a: 1 } }
*/
```
