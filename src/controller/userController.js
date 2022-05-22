const userService = require('../services/userService.js');

const userController = () => {

    const allUser = async (req, res) => {
        const totalUser = await userService.getAllUser();
        res.status(200).json(totalUser);
    }

    const addUser = async (req, res) => {
        const newUser = await userService.addUser(req.body);
        res.status(newUser.code).json(newUser);
    }

    const loginUser = async (req, res) => {
        const userInfo = await userService.loginUser(req.body.email, req.body.password);
        res.status(userInfo.code).json(userInfo);
    }

    const updateLastname = (req, res) => {
        const updatedName = userService.updateLastname(req.params.id , req.body);
        res.status(updatedName.code).json(updatedName);
    }

    const deleteUser = (req, res) => {
        const removedUser = userService.deleteUser(req.params.id);
        res.status(removedUser.code).json(removedUser);
    }
    const deleteAllUser = (req,res) => {
        removeAllUsers = userService.deleteAllUser();
        res.status(removeAllUsers.code).json(removeAllUsers);
    }

    return {
        allUser,
        addUser,
        loginUser,
        deleteUser,
        updateLastname,
        deleteAllUser
    }
}


module.exports = userController();