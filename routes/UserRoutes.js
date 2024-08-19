const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/signIn', userController.signInUser);
router.post('/signUp', userController.signUpUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
