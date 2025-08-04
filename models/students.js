const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
  name: String,
  class: String, // UKG, 1st, 2nd ... 12th
  // phone: String,
  parentName: String,
  // address: String,
  // fee: {
  //   total: Number,
  //   paid: Number,
  //   pending: Number,
  //   lastPaymentDate: Date,
  //   dueDate: Date,
  // },
  // attendanceStatus: {
  //   type: String,
  //   enum: ["Regular", "Absent", "On Leave"],
  //   default: "Regular",
  // },
  // dateAdded: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model("Student", studentSchema);
