import { Students } from "./students.js";
let studentsHTML = "";
Students.forEach((student) => {
  studentsHTML += `
  <div class="list">
    <img src="${student.image.url}"></img>
    <div class="details">
      <h2>${student.name}</h2>
      <p>CLASS : ${student.class}</p>
      <p>STATUS : ${student.status}</p>
    </div>
  </div>
  `;
});
document.querySelector(".students").innerHTML = studentsHTML;
