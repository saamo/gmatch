# Gmatch

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

When you want to match regular expression globally and return only certain capturing groups _at the same time_, well, you're gonna have a [hard time](http://stackoverflow.com/a/844049).

This module will help you to avoid writing extra code to handle this unpleasant thing.

## Install

```bash
npm install --save gmatch
```

## Usage

```js
var gmatch = require('gmatch');

var str = 'Return A and B. And return C and D.';
var pattern = /(.) and (.)/g;

var matches = gmatch(str, pattern);
console.log(matches);
```

And the output is:

```js
[ [ 'A', 'B' ], [ 'C', 'D' ] ]
```

## But Why?

### [String.prototype.match(regexp)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

This results in:

```js
[ 'A and B', 'C and D' ]
```

So no capturing groups at all. It returns the whole match.

### [RegExp.prototype.exec(str)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

This looks better...

```js
[ 'A and B',
  'A',
  'B',
  index: 7,
  input: 'Return A and B. And return C and D.' ]
```

Until you realize that there is something wrong — the second match is missing ([explanation](http://stackoverflow.com/a/844049)).

### Gmatch

Finally the gmatch does what a _sane_ person would expect.

```js
[ [ 'A', 'B' ], [ 'C', 'D' ] ]
```

## License

MIT © [Samir Djellil](http://samirdjellil.com)

[npm-image]: https://img.shields.io/npm/v/gmatch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gmatch
[travis-image]: https://img.shields.io/travis/saamo/gmatch/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/saamo/gmatch
