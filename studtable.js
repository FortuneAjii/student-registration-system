var students = JSON.parse(localStorage.getItem("students")) || [];
var tableBody = document.getElementById("student-rows");
var searchBox = document.getElementById("search");

function showStudents() {
  tableBody.innerHTML = "";

  var search = searchBox.value.trim().toLowerCase();

  for (var i = 0; i < students.length; i++) {
    var details = (students[i].name + " " + students[i].email + " " + students[i].class).toLowerCase();
    if (details.indexOf(search) === -1) {
      continue;
    }

    var row = document.createElement("tr");

    row.innerHTML =
      "<td>" + students[i].name + "</td>" +
      "<td>" + students[i].age + "</td>" +
      "<td>" + students[i].email + "</td>" +
      "<td>" + students[i].class + "</td>" +
      "<td class='actions'>" +
        "<button class='action-btn' onclick='editStudent(" + i + ")'>Edit</button>" +
        "<button class='action-btn delete' onclick='deleteStudent(" + i + ")'>Delete</button>" +
      "</td>";

    tableBody.appendChild(row);
  }
}

// EDIT: remember which student, then go to the form page
function editStudent(index) {
  localStorage.setItem("editIndex", index);
  window.location.href = "index.html";
}

// DELETE: remove from the list, save, redraw
function deleteStudent(index) {
  var sure = confirm("Delete " + students[index].name + "?");
  if (sure) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    showStudents();
  }
}

searchBox.addEventListener("input", showStudents);

showStudents();