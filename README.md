html-templateify
================

`html-templateify` is a Browserify transform which allows you to `require()` your HTML files in the same way you require your JS - without an extension.

Example
-------

Given a folder with two files, `foo.component.js` and `foo.template.html`, you can `require` the string of the template from within `foo.component.js` by calling `require('./foo.template')`

