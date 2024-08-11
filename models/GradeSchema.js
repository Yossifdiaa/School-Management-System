const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
  student:  Schema.Types.ObjectId,
  subject:  Schema.Types.ObjectId,
  score: Number,
  maxScore: Number
}, { timestamps: true });

module.exports = mongoose.model('Grade', gradeSchema);