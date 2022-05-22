const express = require("express");
const router = express.Router();
const userController = require('../controller/userController')
const Middleware = require('../middleware/middleware')

router.get('/' , userController.allUser);
router.post('/add',Middleware.signUpValidations, userController.addUser);
router.post('/login', Middleware.loginValidations, userController.loginUser)
router.delete('/delete/:id', userController.deleteUser)
router.patch('/update/:id', userController.updateLastname)
router.delete('/deleteall', userController.deleteAllUser)

module.exports = router;


// './src/controller/userController'