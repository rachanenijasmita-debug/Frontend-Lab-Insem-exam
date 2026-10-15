let students = [];
function saveStudent() {
localStorage.setItem("students", students);
}
function displayStudents() {
let list = document.getElementById("list");
list.innerHTML = "";
for (let i = 0; i < students.length; i++) {
    let s = students[i].split("|");
    list.innerHTML += "<tr>" +
        "<td>" + s[0] + "</td>" +
        "<td>" + s[1] + "</td>" +
        "<td>" + s[2] + "</td>" +
        "<td>" + s[3] + "</td>" +
        '<td><button class="delete" onclick="deleteStudent(' + i + ')">Delete</button></td>' +
        "</tr>";
}
}
function addStudent() {
let id = document.getElementById("id").value;
let name = document.getElementById("name").value;
let course = document.getElementById("course").value;
let marks = document.getElementById("marks").value;
if (id == "" || name == "" || course == "" || marks == "") {
    alert("Please fill all fields!");
    return;
}
students.push(id + "|" + name + "|" + course + "|" + marks);
saveStudent();
displayStudents();
document.getElementById("id").value = "";
document.getElementById("name").value = "";
document.getElementById("course").value = "";
document.getElementById("marks").value = "";
}
function deleteStudent(i) {
students.splice(i, 1);
saveStudent();
displayStudents();
}
