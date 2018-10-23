var faker = require('faker');

module.exports = {
    dontUseObjectIds: true,
    attributes: {
        id: {
            type: 'string',
            unique: true,
            columnName: '_id'
        },
        userId: {
            type: 'string',
            required: true
        },
        verificationCode: {
            unique: true,
            type: 'string',
        },
        verificationType: {
            type: 'string',
            required: true,
        },
        userDevice: {
            type: 'string',
            required: true

        },
        mobileNumber: {
            unique: false,
            type: 'string',
            required: true,
        },
        isVerified: {
            type: 'boolean',
            required: true,
        }
    }

}
