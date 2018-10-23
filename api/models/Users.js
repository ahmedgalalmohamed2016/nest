
module.exports = {
    dontUseObjectIds: true,
    attributes: {
        id: {
            type: 'string',
            columnName: '_id',
        },
        userNumber: {
            unique: true,
            type: 'string',
            required: true,
        },
        role: {
            type: 'string',
            required: true,
        },
        firstName: {
            required: false,
            type: 'string',
        },
        lastName: {
            required: false,
            type: 'string',
        },
        address: {
            required: false,
            type: 'string'
        },
        profileImage: {
            required: false,
            type: 'string',
        },

        password: {
            type: 'string',
            required: true
        },
        userToken: {
            type: 'string',
            required: false,
        },
        webToken: {
            type: 'string',
            required: false,
        },
        email: {
            type: 'string',
            required: false,
        },
        mobileNumber: {
            unique: true,
            type: 'string',
            required: true,
        },
        isApproved: {
            type: 'boolean',
            required: false,
            defaultsTo: false
        },
        isLockedOut: {
            type: 'boolean',
            required: false,
            defaultsTo: false
        },
        isVisible: {
            type: 'boolean',
            required: false,
            defaultsTo: true
        },
        lastPasswordChangedDate: {
            type: 'string',
            columnType: 'datetime',
            required: false
        },
        failedPasswordAttepmtCount: {
            type: 'number',
            required: false,
            defaultsTo: 0
        },
        gender: {
            type: 'string',
            required: false,
        },
        userDevice: {
            type: 'string',
            required: false,
        },
        lastLoginDate: {
            type: 'string',
            columnType: 'datetime',
            required: false,
        },
        verifiedUserName: {
            type: 'boolean',
            required: false,
            defaultsTo: true
        },
        verifiedMobileNumber: {
            type: 'boolean',
            required: false,
            defaultsTo: false
        },
        verifiedEmail: {
            type: 'boolean',
            required: false,
            defaultsTo: false
        },
        notificationEmail: {
            type: 'boolean',
            required: false,
            defaultsTo: true
        },

        notificationMobile: {
            type: 'boolean',
            required: false,
            defaultsTo: true
        },

    },

}
