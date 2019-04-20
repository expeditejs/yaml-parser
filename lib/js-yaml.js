'use strict';


var loader = require('./yaml-parser/loader');
var dumper = require('./yaml-parser/dumper');


function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}


module.exports.Type                = require('./yaml-parser/type');
module.exports.Schema              = require('./yaml-parser/schema');
module.exports.FAILSAFE_SCHEMA     = require('./yaml-parser/schema/failsafe');
module.exports.JSON_SCHEMA         = require('./yaml-parser/schema/json');
module.exports.CORE_SCHEMA         = require('./yaml-parser/schema/core');
module.exports.DEFAULT_SAFE_SCHEMA = require('./yaml-parser/schema/default_safe');
module.exports.DEFAULT_FULL_SCHEMA = require('./yaml-parser/schema/default_full');
module.exports.load                = loader.load;
module.exports.loadAll             = loader.loadAll;
module.exports.safeLoad            = loader.safeLoad;
module.exports.safeLoadAll         = loader.safeLoadAll;
module.exports.dump                = dumper.dump;
module.exports.safeDump            = dumper.safeDump;
module.exports.YAMLException       = require('./yaml-parser/exception');

// Deprecated schema names from yaml-parser 2.0.x
module.exports.MINIMAL_SCHEMA = require('./yaml-parser/schema/failsafe');
module.exports.SAFE_SCHEMA    = require('./yaml-parser/schema/default_safe');
module.exports.DEFAULT_SCHEMA = require('./yaml-parser/schema/default_full');

// Deprecated functions from yaml-parser 1.x.x
module.exports.scan           = deprecated('scan');
module.exports.parse          = deprecated('parse');
module.exports.compose        = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');
