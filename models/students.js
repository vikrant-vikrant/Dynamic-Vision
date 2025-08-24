const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, require: true },
  grade: { type: String, require: true },
  parent: { type: String },
  contact: { type: Number },
  phone: { type: Number },
  note: { type: String },
  joiningDate: { type: Date, require: true },
  fees: { type: Number },
  //sibling info, fees payment history(amount paid & date)
});

module.exports = mongoose.model("DynamicStudents", studentSchema);
