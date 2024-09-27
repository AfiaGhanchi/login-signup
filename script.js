
function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginBtn").classList.add("active");
    document.getElementById("signupBtn").classList.remove("active");
}


function showSignup() {
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupBtn").classList.add("active");
    document.getElementById("loginBtn").classList.remove("active");
}


function validateEmailAndPassword(email, password) {
    var passPattern = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; 
    var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address containing '@'.");
        return false;
    }

    if (!passPattern.test(password)) {
        alert("Password must contain at least one special character and be between 6 to 16 characters.");
        return false;
    }

    return true;
}


document.getElementById("loginForm").addEventListener("submit", function (event) {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (!validateEmailAndPassword(email, password)) {
        event.preventDefault(); 
    } else {
        alert("Login successful!");
    }
});


document.getElementById("signupForm").addEventListener("submit", function (event) {
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    if (!validateEmailAndPassword(email, password)) {
        event.preventDefault(); 
    } else {
        alert("Sign-up successful!");
    }
});