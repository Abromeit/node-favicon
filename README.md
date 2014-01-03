# Favicon

[![Build Status](https://secure.travis-ci.org/octplane/node-favicon.png?branch=master)](http://travis-ci.org/octplane/node-favicon)

A Node.js module for finding the URL of a web site's
[favicon](http://en.wikipedia.org/wiki/Favicon).

# Installation

    $ npm install ico-ico

# Test

	$ npm install -g mocha
	$ mocha

# Usage

In this example, `favicon_url` is a `String` if an icon is found, or
`null` otherwise.

    var favicon = require('ico-ico');
    
    favicon("http://nodejs.org/", function(err, favicon_url) {
      // ...
    });

# License

See LICENSE.
