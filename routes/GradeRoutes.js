const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/GradeController');

router.post('/', gradeController.assignGrade);
router.get('/', gradeController.getGrades);
router.get('/:id', gradeController.getGrade);
router.put('/:id', gradeController.updateGrade);
router.delete('/:id', gradeController.deleteGrade);

module.exports = router;
