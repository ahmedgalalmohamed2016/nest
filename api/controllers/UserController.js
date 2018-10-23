const _ = require('lodash');
const LoginSchema = require('../validation/LoginSchema');
module.exports = {
    getUserData: async function (req, res) {

    },

    login: async function (req, res) {
        const validate = await ValidationService.validate(LoginSchema, req.reqData);
        if (validate != true)
            return res.movo(404, "missingParam");

        const loginUser = await UserService.login(req);
        if (_.isNil(loginUser) || loginUser == 404)
            return res.movo(404, "errorHappened");
        if (loginUser == 402)
            return res.movo(404, "Please Enter Valid username and password");
        return res.movo(200, "welcome", { token: loginUser.webToken, userDevice: loginUser.userDevice });
    }

}