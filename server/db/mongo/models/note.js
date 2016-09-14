var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
  noteId: { type: String, unique: true, index: true},
  title: String,
  content: String,
  createdAt: Number,
  lastModified: Number,
});

module.exports = mongoose.model('note', noteSchema);
