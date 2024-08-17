const Attendance = require('../models/AttendanceSchema');

exports.markAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();
    res.status(200).json(attendanceRecords);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAttendanceRecord = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id);
    if (!attendance) {
      return res.status(404).json("not found");
    }
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateAttendanceRecord = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body);
    if (!attendance) {
      return res.status(404).json("not found");
    }
    res.status(200).json(attendance);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteAttendanceRecord = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndDelete(req.params.id);
    if (!attendance) {
      return res.status(404).json("not found and can't delete");
    }
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json(error);
  }
};
