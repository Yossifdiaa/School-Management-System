// const Class = require('../models/ClassSchema');

// exports.createClass = async (req, res) => {
//   try {
//     const class = new Class(req.body);
//     await class.save();
//     res.status(201).send(class);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// exports.getClasses = async (req, res) => {
//   try {
//     const classes = await Class.find().populate('students').populate('teachers').populate('subjects');
//     res.status(200).send(classes);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// exports.getClass = async (req, res) => {
//   try {
//     const class = await Class.findById(req.params.id).populate('students').populate('teachers').populate('subjects');
//     if (!class) {
//       return res.status(404).send();
//     }
//     res.status(200).send(class);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// exports.updateClass = async (req, res) => {
//   try {
//     const class = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!class) {
//       return res.status(404).send();
//     }
//     res.status(200).send(class);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// exports.deleteClass = async (req, res) => {
//   try {
//     const class = await Class.findByIdAndDelete(req.params.id);
//     if (!class) {
//       return res.status(404).send();
//     }
//     res.status(200).send(class);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };