const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
  name: String,
  class: Schema.Types.ObjectId,
  subject: Schema.Types.ObjectId,
  date: Date,
  maxScore: Number
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);