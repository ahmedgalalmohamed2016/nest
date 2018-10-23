const Ajv = require('ajv');
const ajv = Ajv();
const _ = require('lodash');

module.exports = {
    validate: function (schema, data) {
        let validate = ajv.validate(schema, data);
            return validate
    }
}