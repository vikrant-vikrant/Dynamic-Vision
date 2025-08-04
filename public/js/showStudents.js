import { Students } from "./students.js";
let studentsHTML = "";
Students.forEach((student) => {
  studentsHTML += `
  <div class="list">
    <h2>${student.name}</h2>
    <p>${student.class}</p>
    </div>
  `;
});
document.querySelector(".students").innerHTML = studentsHTML;
