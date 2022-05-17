const express = require("express");
const router = express.Router();
const userController = require('../controller/userController')

router.get('/' , userController.allUser);
router.post('/add', userController.addUser);
router.get('/info/:id', userController.getUser)
router.delete('/delete/:id', userController.deleteUser)
router.patch('/update/:id', userController.updateLastname)

module.exports = router;


// './src/controller/userController'