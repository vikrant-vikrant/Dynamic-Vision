const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, require: true },
  grade: { type: String, require: true },
  status: { type: String, default: "Active" },
});

module.exports = mongoose.model("DynamicStudents", studentSchema);
