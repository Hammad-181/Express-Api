const ResponseObject = require('../utills/response');
const Validations = require('../validations/validations')


const Middleware = () => {

    const loginValidations = (req, res, next) => {
        const {error} = Validations.validateLoginCred(req.body);
        if(!error) next();
        else return res.status(400).json(ResponseObject.response(error, 'Bad Request', 400));
    }

    const signUpValidations = (req, res, next) => {
        const {error} = Validations.validateSignUp(req.body);
        if(!error) next();
        else return res.status(400).json(ResponseObject.response(error, 'Bad Request', 400));
    }

    return {
        loginValidations,
        signUpValidations
    }
}

module.exports = Middleware();