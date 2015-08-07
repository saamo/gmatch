var assert = require('assert');
var gmatch = require('./');

it('should return only captured groups', function() {
  assert.deepEqual(
    gmatch(
      'Return this (A) and this (B) group. Not that (C) group.',
      /this \((.)\)/g
    ),
    ['A', 'B'],
    'it should have returned an array only with captured groups'
  );
});
