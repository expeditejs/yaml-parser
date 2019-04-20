// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: yaml-parser does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is yaml-parser.


'use strict';


var Schema = require('../schema');


module.exports = new Schema({
  include: [
    require('./json')
  ]
});
