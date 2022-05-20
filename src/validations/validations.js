const Joi = require('joi');

const Validations = () => {
    
    const validateLoginCred = (payload) => {
        const schema = Joi.object().keys({
            email: Joi.string().min(8).max(40).required(),
            password: Joi.string().min(8).max(24).required()
        })
        return schema.validate(payload);
    }

    return {
        validateLoginCred
    }
}

module.exports = Validations();