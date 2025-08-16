// routes/students.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = require("../models/students");

// index - list all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.find({});
    res.render("listings/students", { studentsData: students }); // matches your EJS var
  } catch (err) {
    next(err);
  }
});

// show - show one student
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // validate id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      req.flash("error", "Invalid student id");
      return res.redirect("/students");
    }
    const student = await Student.findById(id);
    const formattedDate = student.joiningDate.toLocaleDateString("en-GB", {
      weekday: "short", // Fri
      day: "2-digit", // 15
      month: "short", // Aug
      year: "numeric", // 2025
    });
    if (!student) {
      req.flash("error", "Student not found");
      return res.redirect("/students");
    }
    res.render("listings/show", { student,formattedDate }); // create this view
  } catch (err) {
    next(err);
  }
});

module.exports = router;
