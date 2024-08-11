const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: String,
  students: [Schema.Types.ObjectId],
  teachers: [Schema.Types.ObjectId],
  subjects: [Schema.Types.ObjectId], 
}, { timestamps: true });

module.exports = mongoose.model('Class', classSchema);