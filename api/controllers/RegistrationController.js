const _ = require('lodash');
const RegistrationSchema = require('../validation/RegistrationSchema');
module.exports = {

    register: async function (req, res) {
        const validate = await ValidationService.validate(RegistrationSchema, req.reqData);
        if (validate != true)
            return res.movo(404, "missingParam");

        let str = req.reqData.mobileNumber.slice(0, 3);
        if (["011", "012", "010", "015"].indexOf(str) == -1)
            return res.movo(404, "mustEgyptNumber");

        const registerUser = await RegistrationService.registerUser(req);
        if (_.isNil(registerUser) || registerUser == 404)
            return res.movo(404, "errorHappened");

        if (_.isNil(registerUser) || registerUser == 402)
            return res.movo(404, "Mobile Number Registered Before Try another mobile number");
        return res.movo(200, "welcome", { token: registerUser.webToken, userDevice: registerUser.userDevice });

    }
}