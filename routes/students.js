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
    if (!student) {
      req.flash("error", "Student not found");
      return res.redirect("/students");
    }
    res.render("listings/show", { student }); // create this view
  } catch (err) {
    next(err);
  }
});

//newStudent - to add new student
router.get("/newStudent", (req, res) => {
  res.render("listings/newStudent");
});
// to save data
router.post("/newStudent", async (req, res) => {
  const { name, grade, status } = req.body;
  const newStudent = new StudentSchema({ name, grade, status });
  try {
    await newStudent.save();
    console.log("Student saved");
    res.redirect("/students");
  } catch (err) {
    console.error("Error saving student:", err);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
