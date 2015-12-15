var htmlMinifier = require('html-minifier').minify,
    jsStringEscape = require('js-string-escape'),
    transformTools = require('browserify-transform-tools');

var opts = {
  includeExtensions: ['.html']
};

var minifyHtml = function(html) {
  return htmlMinifier(html, {
    collapseWhitespace: true,
    conservativeCollapse: true,
    preserveLineBreaks: true,
    removeComments: true
  });
}

var transform = function(content, transformOpts, done) {
  if (transformOpts.opts.minify) {
    content = minifyHtml(content);
  }

  return done(null, "module.exports = '" + jsStringEscape(content) + "';");
};

var templateify = transformTools.makeStringTransform('templateify', opts, transform);

module.exports = templateify;
