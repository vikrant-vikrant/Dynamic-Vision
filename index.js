const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

const StudentSchema = require("./models/students.js");
// const { render } = require("ejs");

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
app.get("/students", async (req, res) => {
  let data = await StudentSchema.find();
  res.render("listings/students.ejs", { data });
});
app.get("/newStudent", (req, res) => {
  res.render("listings/newStudent.ejs");
});

app.post("/newStudent", async (req, res) => {
  let { name, grade, status } = req.body;
  let newChat = new StudentSchema({
    name: name,
    grade: grade,
    status: status,
  });
  newChat
    .save()
    .then((res) => {
      console.log("Add new Student");
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("listings/newStudent.ejs");
});

app.listen(8000, () => {
  console.log(`App is listing to port : 8000`);
});
