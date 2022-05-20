const Validations = require('../validations/validations')


const Middleware = () => {

    const loginValidations = (req, res, next) => {
        const {error} = Validations.validateLoginCred(req.body);
        if(!error) next();
        else return res.status(400).json({
            code: 400,
            message: error.details[0].message
        });
    }

    return {
        loginValidations
    }
}

module.exports = Middleware();