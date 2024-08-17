const express = require('express');
const router = express.Router();
const classController = require('../controllers/ClassController');

router.post('/', classController.createClass);
router.get('/', classController.getClasses);
router.get('/:id', classController.getClass);
router.put('/:id', classController.updateClass);
router.delete('/:id', classController.deleteClass);

module.exports = router;
