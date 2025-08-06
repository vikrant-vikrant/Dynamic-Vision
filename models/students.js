const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  class: String,
  status: String,
});

module.exports = mongoose.model("DynamicStudents", studentSchema);
