//import { v4 as uuidv4 } from 'uuid';
const uuidv4 = require('uuid');
let users = [];

const userService = () => {
    
    const getAllUser = () => {
        return users;
    }

    const addUser = (payload) => {
        let usersCurrentLength = users.length;

        let index =  users.findIndex(user => user.email == payload.email) 

        if(index < 0)
            users.push({...payload, id:uuidv4.v4()})

        if(usersCurrentLength < users.length) {
            return {
                message : 'User Added Successfully',
                code : 200
            }
        }
        else {
            return {
                message : 'unable to add user',
                code : 400
            }
        }
        
    }

    const loginUser = (email, password) => {
        let checkEmail = email.includes('@')
        if(checkEmail) {
            let user = users.filter(user => (user.email == email && user.password === password));
        
            if(user.length > 0) {
                return {
                    code: 200,
                    message : `hey ${user[0].firstName} You have logged in successfully`
                }
            }
            else {
                return {
                    code: 400,
                    message : 'Please enter correct email and password'
                }
            }
        }
        else {
            return {
                code : 400,
                message : "Email must contain '@' example : abcd@email.com "
            }
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