const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

// const Student = require("./models/students.js");
// const { render } = require("ejs");

// const MONGO_URL = "mongodb://127.0.0.1:27017/DynamicVision";
// main()
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((err) => {
//     console.log("DB Connection Error:", err);
//   });
// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.render("listings/index.ejs");
});
app.get("/blog", (req, res) => {
  res.render("listings/blog.ejs");
});
app.get("/students", (req, res) => {
  res.render("listings/students.ejs");
});
// app.post("/student", async (req, res) => {
//   const { name, grade, parent } = req.body;
//   await Student.create(name, grade, parent);
//   res.render("added", { name });
// });

app.listen(8000, () => {
  console.log(`App is listing to port : 8000`);
});
