const uuidv4 = require('uuid/v4');
const faker = require('faker');
const _ = require('lodash');

module.exports = {

    registerUser: async function (req) {

        // Generate Token
        req.saveData = {};
        req.saveData.id = uuidv4();
        req.saveData.userDevice = uuidv4();
        const userDevice = req.saveData.userDevice;
        const usersNamedFinn = await Users.findOne({ mobileNumber: req.reqData.mobileNumber });
        if (!_.isNil(usersNamedFinn))
            return 402;

        // Generate Password
        const password = await passwordService.generatePassword(req.reqData.password, req.saveData.id);
        if (_.isNil(password) || password == false)
            return 404;

        // Generate Token
        const token = await tokenService.generateLoginToken(req.saveData.userDevice, req.saveData.id, req.reqData.mobileNumber, 'owner');
        if (_.isNil(token) || token == false)
            return 404;


        req.saveData.password = password;
        req.saveData.role = 'owner';

        req.saveData.firstName = req.reqData.firstName;
        req.saveData.lastName = req.reqData.lastName;
        req.saveData.mobileNumber = req.reqData.mobileNumber;
        req.saveData.lastLoginDate = new Date();
        req.saveData.userNumber = Math.floor(Math.random() * 90000000) + 1000000;
        req.saveData.webToken = token;

        const user = await Users.create(req.saveData).fetch();
        if (_.isNil(user))
            return 404;

        // Verification Number
        let verificationData = {};
        verificationData.userId = req.saveData.id;
        verificationData.id = uuidv4();
        verificationData.userDevice = userDevice;
        verificationData.mobileNumber = req.reqData.mobileNumber;
        verificationData.verificationType = 'register';
        let verificationCode = Math.floor(Math.random() * 90000000) + 1000000;
        verificationData.verificationCode = await passwordService.generatePassword(verificationCode, req.saveData.mobileNumber);
        verificationData.isVerified = false;
        await Verifications.create(verificationData);
        await sendSmsService.sendActivationAccountsms(req, verificationCode);
        return user;

    }
}