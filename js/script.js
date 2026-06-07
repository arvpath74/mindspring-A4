
function welcomeMessage() {
    alert("Welcome to MindSpring Collective - Newsletter Signup");
}



function validateForm() {
    let first = document.getElementById("firstName").value.trim();
    let last = document.getElementById("lastName").value.trim();

    if (first === "" || last === "") {
        alert("First Name and Last Name are required.");
        return false;
    }
    return true;
}
