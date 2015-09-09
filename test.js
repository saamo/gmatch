var assert = require('assert');
var gmatch = require('./');

it('should return an array of capturing groups arrays', function() {
  var actual = gmatch(
    'Return A and B. And return C and D.',
    /(.) and (.)/g
  );
  var expected = [['A', 'B'], ['C', 'D']];

  assert.deepEqual(
    actual,
    expected,
    'it should have returned an array of capturing groups arrays'
  );
});

it('should return an empty array', function() {
  var actual = gmatch(
    'Return an empty array.',
    /(.) and (.)/g
  );
  var expected = [];

  assert.deepEqual(
    actual,
    expected,
    'it should have returned an empty array'
  );
});
