const Joi = require('joi');
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const Validations = () => {
    
    const validateLoginCred = (payload) => {
        const schema = Joi.object().keys({
            email: Joi.string().regex(EMAIL_REGEX).min(8).max(40).required(),
            password: Joi.string().min(8).max(24).required()
        })
        return schema.validate(payload);
    }

    const validateSignUp = (payload) => {
        const schema = Joi.object().keys({
            firstName: Joi.string().max(32).min(1).required(),
            lastName: Joi.string().max(32).min(1).optional(),
            email: Joi.string().regex(EMAIL_REGEX).min(8).max(40).required(),
            password: Joi.string().min(8).max(24).required()
        })
        return schema.validate(payload);
    }

    return {
        validateLoginCred,
        validateSignUp
    }
}

module.exports = Validations();