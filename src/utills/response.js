class ResponseObject {
   static response = (res, message, code = 200) => {
        return{
            code: code,
            response: res,
            message: message
        }
    }
}

module.exports = ResponseObject;