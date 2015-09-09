var gmatch = function(str, pattern) {
  var matches = [];
  while (match = pattern.exec(str)) {
    var capturedGroups = extractCapturedGroups(match);
    matches.push(capturedGroups);
  }
  return matches;
}

var extractCapturedGroups = function(match) {
  var capturedGroups = [];
  for (var i = 1; i < match.length; i++) {
    capturedGroups.push(match[i]);
  }
  return capturedGroups;
};

module.exports = gmatch;
