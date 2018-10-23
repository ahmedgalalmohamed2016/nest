const _ = require('lodash');
module.exports = function (statusCode, message, data) {
    let res = this.res;
    let results = {};
    results.statusCode = statusCode;
    results.message = message;
    if (!_.isNil(data))
        results.data = data;
    return res.json(results);

}