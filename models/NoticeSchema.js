const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
  title:  String,
  content: String,
  postedBy: Schema.Types.ObjectId,
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Notice', noticeSchema);