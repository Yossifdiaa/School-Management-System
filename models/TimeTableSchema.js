const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timetableSchema = new Schema({
  class: Schema.Types.ObjectId,
  subject: Schema.Types.ObjectId,
  teacher: Schema.Types.ObjectId,
  day: String,
  startTime: String,
  endTime:  String,
}, { timestamps: true });

module.exports = mongoose.model('Timetable', timetableSchema);