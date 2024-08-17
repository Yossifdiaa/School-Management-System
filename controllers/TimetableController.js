const Timetable = require('../models/TimeTableSchema');

exports.createTimetable = async (req, res) => {
  try {
    const timetable = new Timetable(req.body);
    await timetable.save();
    res.status(201).json(timetable);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.find();
    res.status(200).json(timetables);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.findById(req.params.id);
    if (!timetable) {
      return res.status(404).json();
    }
    res.status(200).json(timetable);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.findByIdAndUpdate(req.params.id, req.body);
    if (!timetable) {
      return res.status(404).json();
    }
    res.status(200).json(timetable);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.findByIdAndDelete(req.params.id);
    if (!timetable) {
      return res.status(404).json();
    }
    res.status(200).json(timetable);
  } catch (error) {
    res.status(500).json(error);
  }
};
