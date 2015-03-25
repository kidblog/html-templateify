var jsStringEscape = require('js-string-escape'),
    transformTools = require('browserify-transform-tools');

var opts = {
  includeExtensions: ['.html']
};

var transform = function(content, transformOpts, done) {
  return done(null, "module.exports = '" + jsStringEscape(content) + "';");
};

var templateify = transformTools.makeStringTransform('templateify', opts, transform);

module.exports = templateify;
