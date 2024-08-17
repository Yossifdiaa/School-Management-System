const Subject = require('../models/SubjectSchema');

exports.createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json(subject);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
      return res.status(404).json("not found");
    }
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body);
    if (!subject) {
      return res.status(404).json("not found");
    }
    res.status(200).json(subject);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res.status(404).json("not found and can't delete");
    }
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json(error);
  }
};
