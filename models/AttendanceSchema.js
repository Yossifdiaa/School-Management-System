const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  student: Schema.Types.ObjectId,
  class: Schema.Types.ObjectId,
  date: Date,
  status: String
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);