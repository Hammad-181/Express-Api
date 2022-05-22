const bcrypt = require('bcrypt');
const saltRounds = 10;

class Auth {
    static encryptPassword = (password) => {
       return new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if(hash) {
                    resolve(hash);
                }
                else {
                    reject('');
                }
            })
       })           
    }
}
module.exports = Auth;