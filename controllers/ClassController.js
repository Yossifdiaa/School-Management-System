const Class = require('../models/ClassSchema');

exports.createClass = async (req, res) => {
  try {
    const classInschool = new Class(req.body);
    await classInschool.save();
    res.status(201).json(classInschool);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getClass = async (req, res) => {
  try {
    const classInschool = await Class.findById(req.params.id);
    if (!classInschool) {
      return res.status(404).json("not found");
    }
    res.status(200).json(classInschool);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateClass = async (req, res) => {
  try {
    const classInschool = await Class.findByIdAndUpdate(req.params.id, req.body);
    if (!classInschool) {
      return res.status(404).json("not found");
    }
    res.status(200).json(classInschool);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteClass = async (req, res) => {
  try {
    const classInschool = await Class.findByIdAndDelete(req.params.id);
    if (!classInschool) {
      return res.status(404).json("not found and can't delete");
    }
    res.status(200).json(classInschool);
  } catch (error) {
    res.status(500).json(error);
  }
};