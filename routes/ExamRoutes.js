const express = require('express');
const router = express.Router();
const examController = require('../controllers/ExamController');

router.post('/', examController.createExam);
router.get('/', examController.getExams);
router.get('/:id', examController.getExam);
router.put('/:id', examController.updateExam);
router.delete('/:id', examController.deleteExam);

module.exports = router;
