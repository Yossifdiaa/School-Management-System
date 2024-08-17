const express = require('express');
const router = express.Router();
const timetableController = require('../controllers/TimetableController');

router.post('/', timetableController.createTimetable);
router.get('/', timetableController.getTimetables);
router.get('/:id', timetableController.getTimetable);
router.put('/:id', timetableController.updateTimetable);
router.delete('/:id', timetableController.deleteTimetable);

module.exports = router;
