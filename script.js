const form = document.getElementById("registrationForm");

const roomSelect = document.getElementById("room");
const roomFees = document.getElementById("roomFees");

const fees = {
    single: "₹5,000/month",
    double: "₹3,500/month",
    triple: "₹2,500/month"
};

// Automatic Room Fees
roomSelect.addEventListener("change", function() {
    roomFees.value = fees[roomSelect.value] || "";
});

// Student Registration
form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let student = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        course: document.getElementById("course").value.trim(),
        room: roomSelect.options[roomSelect.selectedIndex].text,
        fees: fees[roomSelect.value]
    };

    let students = JSON.parse(
        localStorage.getItem("hostelStudents")
    ) || [];

    students.push(student);

    localStorage.setItem(
        "hostelStudents",
        JSON.stringify(students)
    );

    alert("Registration Successful!");

    form.reset();
    roomFees.value = "";
});