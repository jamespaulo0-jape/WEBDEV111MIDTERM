function goToParts() {
    window.location.href = "parts.html";
}

function goToContact() {
    window.location.href = "contact.html";
}

function submitForm() {
    alert("Message Sent!");
}

function signup() {
    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPass").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Account Created!");
    window.location.href = "login.html";
}

function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");

    if (user === storedUser && pass === storedPass) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Account!");
    }
}