const uuidv4 = require('uuid/v4');
const faker = require('faker');
const _ = require('lodash');

module.exports = {
    login: async function (req) {

        const user = await Users.findOne({ mobileNumber: req.reqData.userName });

        if (_.isNil(user))
            return 402;

        const password = await passwordService.comparePassword(req.reqData.password, user.password, user.id);
        if (_.isNil(password) || password != true)
            return 402;


        // Generate Token
        req.saveData = {};
        req.saveData.userDevice = uuidv4();

        // Generate Token
        const userToken = await tokenService.generateLoginToken(req.saveData.userDevice, user.id, req.reqData.mobileNumber, user.role);
        if (_.isNil(userToken) || userToken == false)
            return 404;

        let saveData = {};
        if (!!req.reqData.type && (req.reqData.type == "web"))
            saveData.webToken = userToken;
        else
            saveData.userToken = userToken;
        saveData.lastLoginDate = new Date();

        const updatedUser = await Users.update({ id: user.id }, saveData).fetch();
        if (_.isNil(updatedUser) || updatedUser.length < 1)
            return 402;

        return updatedUser[0];
    }
}