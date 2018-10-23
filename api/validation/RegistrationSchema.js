module.exports = {
    type: 'object',
    properties: {
        firstName: {
            type: 'string',
            pattern: String(sails.config.validation.name)
        },

        lastName: {
            type: 'string',
            pattern: String(sails.config.validation.name)
        },
        mobileNumber: {
            type: 'string',
            pattern: String(sails.config.validation.mobileNumber)
        },
        password: {
            type: 'string',
            pattern: String(sails.config.validation.password)
        },
    },
    required: ['firstName', 'lastName', 'mobileNumber', 'password'],
};
