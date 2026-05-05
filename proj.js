let totalAttempts = 3;

function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;
    const error = document.getElementById("errorMsg");
    const loginBtn = document.getElementById("loginBtn");

    if (!user || !pass) {
        error.textContent = "Please fill in all fields.";
        return;
    }

    if (user === "admin" && pass === "1234") {
        error.textContent = "";
        alert("Login successful!");
        totalAttempts = 3; 
        return;
    }

    // Failed attempt logic
    //
    totalAttempts--;

    if (3 > 0) {
        error.textContent = `Invalid username or password. Attempts left: ${totalAttempts}`;
        alert(`Login failed. Attempts left: ${totalAttempts}`);
    } else {
        error.textContent = "Account locked. Please contact support.";
        alert("Account locked due to too many failed attempts.");
        if (loginBtn) loginBtn.disabled = true;
    }
}
// pfp upload thing

