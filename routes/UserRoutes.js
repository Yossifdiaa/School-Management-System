const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const isAuth = require('../middlewares/isAuth');


router.post('/signIn', userController.signInUser);
router.post('/signUp', userController.signUpUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', isAuth ,   userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
