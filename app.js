import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

// Firebase configuration (replace with your actual Firebase credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCBj61ozUOQYwyOeDrYitLElAzUaK3Kzfk",
    authDomain: "myfirst-webapp.firebaseapp.com",
    projectId: "myfirst-webapp",
    storageBucket: "myfirst-webapp.firebasestorage.app",
    messagingSenderId: "862813763911",
    appId: "1:862813763911:web:08072b25920d1bd921b462",
    measurementId: "G-LFC2EYVYQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listener for login form submission
document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get email and password from form inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sign in with Firebase authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            alert("Login successful!");
            console.log("Logged in user:", user);

            // Redirect to the dashboard page
            window.location.href = "./index.html";
        })
        .catch((error) => {
            // Handle login errors
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);

            console.error("Login error:", errorCode, errorMessage);
        });
});

// Event listener for sign-up form submission
document.getElementById("signup-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Password match check
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Firebase Authentication Sign Up
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log("User signed up: ", user);
            alert("Sign-up successful!");
            // After sign-up successful, redirect to login page
            window.location.href = "./login.html";
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error: ", errorCode, errorMessage);
            alert("Error during sign-up: " + errorMessage);
        });
});


