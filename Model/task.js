const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  vesselname: { type: String, required: true },
  depature: { type: String, required: true},
  arrival: { type: String, required: true}
});

module.exports = mongoose.model('Task', TaskSchema);