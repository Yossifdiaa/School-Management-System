const Assignment = require('../models/AssignmentSchema');

exports.createAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json();
    }
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body);
    if (!assignment) {
      return res.status(404).json();
    }
    res.status(200).json(assignment);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!assignment) {
      return res.status(404).json();
    }
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json(error);
  }
};
