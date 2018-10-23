var request = require('request');

module.exports = {
    sendActivationAccountsms: function (req, verificationCode) {
        var messageData = encodeURI('Thanks doctor ' + req.saveData.firstName + ' ' +
            req.saveData.lastName + ' for register in doctormovo your account confirmation code is ' + verificationCode);
        request('https://smsmisr.com/api/send.aspx?username=PN1P67XD&password=BYU9Y8&language=1&sender=movoclinic&mobile=2' +
            req.reqData.mobileNumber + '&message=' + messageData
            , function (error, response, body) {
                if (error)
                    return false;
                return true;
            });
    },
    sendResetPasswordsms: function (req, verificationCode) {
        var messageData = encodeURI('Thanks doctor ' + req.reqData.firstName + ' ' +
            req.reqData.lastName + ' for register in doctormovo verification code for reset password is ' +
            verificationCode);
        request('https://smsmisr.com/api/send.aspx?username=PN1P67XD&password=BYU9Y8&language=1&sender=movoclinic&mobile=2' +
            req.reqData.mobileNumber + '&message=' + messageData
            , function (error, response, body) {
                if (error)
                    return false;

                return true;
            });
    }
}