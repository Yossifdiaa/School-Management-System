const Grade = require('../models/GradeSchema');

exports.assignGrade = async (req, res) => {
  try {
    const grade = new Grade(req.body);
    await grade.save();
    res.status(201).json(grade);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getGrades = async (req, res) => {
  try {
    const grades = await Grade.find();
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getGrade = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) {
      return res.status(404).json("not found");
    }
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateGrade = async (req, res) => {
  try {
    const grade = await Grade.findByIdAndUpdate(req.params.id, req.body);
    if (!grade) {
      return res.status(404).json();
    }
    res.status(200).json(grade);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteGrade = async (req, res) => {
  try {
    const grade = await Grade.findByIdAndDelete(req.params.id);
    if (!grade) {
      return res.status(404).json();
    }
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json(error);
  }
};
