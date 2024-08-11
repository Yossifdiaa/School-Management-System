const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: String,
  classes: [Schema.Types.ObjectId]
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);