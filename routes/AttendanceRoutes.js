const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/AttendanceController');

router.post('/', attendanceController.markAttendance);
router.get('/', attendanceController.getAttendanceRecords);
router.get('/:id', attendanceController.getAttendanceRecord);
router.put('/:id', attendanceController.updateAttendanceRecord);
router.delete('/:id', attendanceController.deleteAttendanceRecord);

module.exports = router;
