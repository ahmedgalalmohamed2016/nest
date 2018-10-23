module.exports = {
    type: 'object',
    properties: {
        userName: {
            type: 'string',
        },
        password: {
            type: 'string',
            pattern: String(sails.config.validation.password)
        },
    },
    required: ['userName', 'password'],
};
