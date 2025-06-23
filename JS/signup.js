// Your Firebase config
//   const firebaseConfig = {
//     apiKey: "AIzaSyDXBYAZOmIRiJHbSmyaOuWxGGsJWAh4fbw",
//     authDomain: "cinespot-50de7.firebaseapp.com",
//     projectId: "cinespot-50de7",
//     storageBucket: "cinespot-50de7.firebasestorage.app",
//     messagingSenderId: "765601253783",
//     appId: "1:765601253783:web:365806025c6b0e3bb5dcd2",
//     measurementId: "G-ZJC59Q6JQS"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//   // Make Auth globally available
//   window.auth = firebase.auth();



let currentcaptcha = "";

function generateCaptcha() {
    currentcaptcha = Math.random().toString(36).substring(2, 6).toUpperCase();
    document.getElementById('captchaText').innerText = currentcaptcha;
}

function ValidateCaptcha() {
    const userinput = document.getElementById('captchaInput').value.trim().toUpperCase();
    const captchaError = document.getElementById('captchaError');

    if (userinput !== currentcaptcha) {
        captchaError.classList.remove('hidden');
        document.getElementById('captchaInput').value = "";
    } else {
        captchaError.classList.add('hidden');
    }
}

// Validate email format
function validateEmail() {
    const Email = document.getElementById('email').value.trim();
    const EmailError = document.getElementById('emailError');
    const regex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(com|org|pk|gov|net|edu)$/;
    if (!regex.test(Email)) {
        emailError.classList.remove('hidden');
        Email.value = "";
    } else {
        emailError.classList.add('hidden');
    }
}

// Validate password strength
function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!strongPassword.test(password)) {
        passwordError.classList.remove('hidden');
        password.value = "";
    } else {
        passwordError.classList.add('hidden');
    }
}

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

// Global function for sign-up
function handleSignup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  window.auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.error(error);
      alert("Signup failed: " + error.message);
    });
}

// Make the function global so it's accessible via HTML's onclick
window.handleSignup = handleSignup;


// Optional: Google Sign-in
window.signInWithGoogle = async function () {
    try {
        await auth.signInWithPopup(provider);
        window.location.href = "./mainpage.html";
    } catch (error) {
        alert("Google Sign-in failed: " + error.message);
    }
};


// Initialize captcha on page load
window.onload = generateCaptcha;