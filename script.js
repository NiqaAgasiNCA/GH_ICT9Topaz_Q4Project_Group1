// maximum login attempts
let attempts = 3;

// correct login credentials
let correctUser = "ilovejude";
let correctPass = "judeb";

function login() {

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if (username === "ilovejude" && password === "judeb") {
    alert("Login successful!");

    window.location.href = "dashboard.html";

}
else {
   attempts--;
   document.getElementById("attemptMessage").innerHTML = "Incorrect username or password. Attempts left: " + attempts;

   if (attempts === 0) {
    document.getElementById("loginBtn").disabled = true;
    alert("Maximum login attempts reached.");
}
}
}
function previewimage(event){
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
