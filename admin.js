let students = JSON.parse(
    localStorage.getItem("hostelStudents")
) || [];

function displayStudents() {

    let table = document.getElementById("studentTable");
    let total = document.getElementById("totalStudents");
    let empty = document.getElementById("emptyMessage");

    table.innerHTML = "";

    total.textContent = students.length;

    empty.style.display =
        students.length === 0 ? "block" : "none";

    students.forEach(function(student, index) {

        let row = document.createElement("tr");

        let values = [
            index + 1,
            student.name,
            student.email,
            student.phone,
            student.course,
            student.room,
            student.fees
        ];

        values.forEach(function(value) {
            let cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        let actionCell = document.createElement("td");
        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            deleteStudent(index);
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        table.appendChild(row);
    });
}

function deleteStudent(index) {

    if (confirm("Are you sure you want to delete this student?")) {

        students.splice(index, 1);

        localStorage.setItem(
            "hostelStudents",
            JSON.stringify(students)
        );

        displayStudents();
    }
}

displayStudents();