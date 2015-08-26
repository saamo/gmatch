# Gmatch

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

There is a _catch_ in JavaScript language. When you want to match regular expression _globally_ and return only certain groups at the same time, well, it's not that simple.

It is possible but you have to put a little effort into it as you can see [here](http://stackoverflow.com/a/844049). This module will help you avoid writing this extra code.

## Install

```bash
npm install --save gmatch
```

## Usage

```js
var gmatch = require('gmatch');

var str = 'Return this (A) and this (B) group. Not that (C) group.';
var pattern = /this \((.)\)/g;

var matches = gmatch(str, pattern);
console.log(matches);
```

And the output is:

```bash
[ 'A', 'B' ]
```

## This is a typical _wtf_ thing

### [String.prototype.match(regexp)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

This results in:

```
[ 'this (A)', 'this (B)' ]
```

So no capturing groups at all. It returns the whole match.

### [RegExp.prototype.exec(str)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

This looks better...

```
[ 'this (A)',
  'A',
  index: 7,
  input: 'Return this (A) and this (B) group. Not that (C) group.' ]
```

Until you realize that there is something wrong – the second match is missing ([explanation](http://stackoverflow.com/a/844049)).

### Gmatch

Finally the gmatch does what a _sane_ person would expect.

```
[ 'A', 'B' ]
```

## License

MIT © [Samir Djellil](http://samirdjellil.com)

[npm-image]: https://img.shields.io/npm/v/gmatch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gmatch
[travis-image]: https://img.shields.io/travis/saamo/gmatch/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/saamo/gmatch
