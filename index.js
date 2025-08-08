const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
const MONGO_URL = "mongodb://127.0.0.1:27017/DynamicVision";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.render("listings/index.ejs");
});
app.get("/blog", (req, res) => {
  res.render("listings/blog.ejs");
});
const studentsRoutes = require("./routes/students");
app.use("/students", studentsRoutes);

// app.get("/newStudent", (req, res) => {
//   res.render("listings/newStudent.ejs");
// });
// app.post("/newStudent", async (req, res) => {
//   const { name, grade, status } = req.body;
//   const newStudent = new StudentSchema({ name, grade, status });
//   try {
//     await newStudent.save();
//     console.log("Student saved");
//     res.redirect("/students");
//   } catch (err) {
//     console.error("Error saving student:", err);
//     res.status(500).send("Something went wrong");
//   }
// });

app.listen(8000, () => {
  console.log(`App is listing to port : 8000`);
});
