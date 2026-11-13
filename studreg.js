console.log("studreg.js is connected");

var form = document.getElementById("student");
var students = JSON.parse(localStorage.getItem("students")) || [];

var editIndex = localStorage.getItem("editIndex");


form.addEventListener("submit", function (event) {
  event.preventDefault();

   var student = {
    name: document.getElementById("FullName").value,
    age: document.getElementById("age").value,
    email: document.getElementById("Email").value,
    class: document.getElementById("class").value
  };


  if (editIndex !== null && students[editIndex]) {
    students[editIndex] = student;
  } else {
    students.push(student);
  }

  localStorage.setItem("students", JSON.stringify(students));
  localStorage.removeItem("editIndex");
  window.location.href = "studtable.html";
});

if (editIndex !== null && students[editIndex]) {
  var s = students[editIndex];
  document.getElementById("FullName").value = s.name;
  document.getElementById("age").value = s.age;
  document.getElementById("email").value = s.email;
  document.getElementById("class").value = s.class;
  document.getElementById("regbtn").textContent = "Save Changes";
}