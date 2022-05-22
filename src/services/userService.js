//import { v4 as uuidv4 } from 'uuid';
const uuidv4 = require('uuid');
const ResponseObject = require('../utills/response');
let users = [];
const User = require('../model/user');
const user = require('../model/user');
const Constants = require('../utills/constants');
const Auth = require('../auth/auth');

const userService = () => {
    
    const getAllUser = () => {
        try{
            return User.findAll().then(res => {
                if(res) {
                    return ResponseObject.response(res, Constants.FOUND)
                }
                else{
                    return ResponseObject.response(res, Constants.USER_NOT_FOUND, 404)
                }
            })
        }
        catch(err) {
            return ResponseObject.response(err, Constants.INTERNAL_SERVER_ERROR, 500)
        }
    }

    const addUser = (payload) => {
        try{
            payload.id = uuidv4.v4();
            return Auth.encryptPassword(payload.password).then(res => {
                payload.password = res;
                return User.create(payload).then((result) => {
                    if(result) {
                        return ResponseObject.response(result, Constants.USER_ADDED)
                    }
                }).catch(err => {
                    return ResponseObject.response(err, Constants.USER_NOT_ADDED, 500)
                })
            }).catch(ResponseObject.response({}, Constants.INTERNAL_SERVER_ERROR, 500));
        }
        catch(err){
            return ResponseObject.response(err, Constants.INTERNAL_SERVER_ERROR, 500)
        }
    }

    const loginUser = (email, password) => {
        try {
            return User.findOne({
                where: {
                    email: email,
                    password: password
                }
            }).then(res => {
                if(res)
                    return ResponseObject.response(res, Constants.LOGIN_SUCCESSFULL);
                else {
                    return ResponseObject.response(res, Constants.USER_NOT_FOUND, 404);
                }
            }).catch(err => {
                return ResponseObject.response(err, Constants.INTERNAL_SERVER_ERROR, 500)
            })
        }
        catch(err) {
            return ResponseObject.response(err, Constants.INTERNAL_SERVER_ERROR, 500)
        }
    }

    const updateLastname = (id ,lastname) => {
        let updatedName = users.filter(user => user.id == id ).map(user => user.lastName = lastname.lastName);
        
        if(updatedName) {
            
            return {
                message: "Last name was updated successfully",
                code : 200
            }
        }
        else {
            return {
                message : "Please enter correct user Id",
                code : 400
            }
        }
    }

    const deleteUser = (id) => {
        users = users.filter(user => user.id != id);
       
        if(users) {
         return {
             message : "user deleted successfully",
             code : 200
            }
        }
        else {
            return {
                message : "Please enter the correct user ID",
                code : 400
            }
        }
    }

    const deleteAllUser = () => {
      users = [];
    
    if(users.length == 0){
        return {
            message : 'All users deleted successfully',
            code : 200
        }    
    }
    else {
        return {
            message : 'Unable to delete user',
            code : 400
        }
    }
      
    }
        
    return {
        getAllUser,
        addUser,
        loginUser,
        deleteUser,
        updateLastname,
        deleteAllUser,
    }
}


module.exports = userService();