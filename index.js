module.exports = function(str, pattern) {
  var matches = [];
  while (match = pattern.exec(str)) {
    matches.push(match[1]);
  }
  return matches;
}
