'use strict';


var assert = require('assert');
var fs     = require('fs');
var path   = require('path');
var yaml   = require('../../lib/yaml-parser');


var badThings = [];


global.makeBadThing = function (thing) {
  badThings.push(thing);
};


test('Function constructor must not allow to execute any code while parsing.', function () {
  var filename = path.join(__dirname, 'parse-function-security.yml'),
      contents = fs.readFileSync(filename, 'utf8');

  assert.throws(function () { yaml.load(contents); }, yaml.YAMLException);
  assert.deepEqual(badThings, []);
});
