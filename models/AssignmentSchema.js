const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  title: String,
  description:  String,
  class: Schema.Types.ObjectId,
  subject: Schema.Types.ObjectId,
  teacher:  Schema.Types.ObjectId,
  dueDate: Date
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);