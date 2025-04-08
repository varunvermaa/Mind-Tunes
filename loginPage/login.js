import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Import bcrypt.js for password hashing
import bcrypt from "https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm";

// DOM elements
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const allButtons = document.querySelectorAll('button');
const socialButtons = document.querySelectorAll('.social-icons a');

// Add button press animation
function addButtonEffects() {
    // Add ripple effect to all buttons
    allButtons.forEach(button => {
        button.addEventListener('mousedown', function(e) {
            // Add pressed class for CSS transitions
            this.classList.add('button-pressed');
            
            // Optional: Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            
            this.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
                this.classList.remove('button-pressed');
            }, 600);
        });
    });
    
    // Add effects to social buttons
    socialButtons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.classList.add('button-pressed');
            setTimeout(() => this.classList.remove('button-pressed'), 300);
        });
    });
}

// Switch between sign-in and sign-up forms with smooth transitions
if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqzM8Jn476R6Np9gxkSSFuUN3-YHitKx4",
    authDomain: "mindtunes-c09c9.firebaseapp.com",
    projectId: "mindtunes-c09c9",
    storageBucket: "mindtunes-c09c9.appspot.com",
    messagingSenderId: "711226726879",
    appId: "1:711226726879:web:23ab595820e81663660c6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Function to show loading state on buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.textContent = "Loading...";
    } else {
        button.disabled = false;
        button.textContent = button.dataset.originalText || button.textContent;
    }
}

// Function to display errors in a nicer way
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.opacity = "1";
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            errorElement.style.opacity = "0";
        }, 5000);
    }
}

// Function to redirect with animation
function redirectWithAnimation(url) {
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

// Detect back navigation
window.onload = function() {
    // Apply all button effects
    addButtonEffects();
    
    // Add fade-in effect to the container
    setTimeout(() => {
        if (container) container.style.opacity = "1";
    }, 100);
    
    if (performance.navigation.type === 2) {
        window.location.reload();
    }
};

// Google Sign-In
const googleSignInButtons = document.querySelectorAll("#google-signin"); 

googleSignInButtons.forEach(button => {
    button.addEventListener("click", async () => {
        try {
            setButtonLoading(button, true);
            const result = await signInWithPopup(auth, provider);
            console.log("Google sign-in success:", result.user);
            redirectWithAnimation("/Onboarding/onboarding.html");
        } catch (error) {
            console.error("Google sign-in error:", error);
            showError("signin-error", error.message);
        } finally {
            setButtonLoading(button, false);
        }
    });
});

// Email Sign-Up with Hashed Password Storage
const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("signup-name").value.trim();
        const email = document.getElementById("signup-email").value.trim();
        const password = document.getElementById("signup-password").value.trim();
        const submitButton = signupForm.querySelector('button[type="submit"]');

        if (!name || !email || !password) {
            showError("signup-error", "Please fill in all fields");
            return;
        }

        try {
            setButtonLoading(submitButton, true);
            
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Hash the password before storing it
            const hashedPassword = await bcrypt.hash(password, 10);

            // Store user details with hashed password in Firestore
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: name,
                email: email,
                password: hashedPassword,
                createdAt: new Date()
            });

            redirectWithAnimation("/Onboarding/onboarding.html");
        } catch (error) {
            showError("signup-error", error.message);
        } finally {
            setButtonLoading(submitButton, false);
        }
    });
}

// Email Sign-In
const signinForm = document.getElementById("signin-form");
if (signinForm) {
    signinForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("signin-email").value.trim();
        const password = document.getElementById("signin-password").value.trim();
        const submitButton = signinForm.querySelector('button[type="submit"]');

        try {
            setButtonLoading(submitButton, true);
            
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Sign-In Successful:", userCredential.user);
            redirectWithAnimation("/Onboarding/onboarding.html");
        } catch (error) {
            showError("signin-error", error.message);
        } finally {
            setButtonLoading(submitButton, false);
        }
    });
}

// Forgot Password
const forgotPassword = document.getElementById("forgot-password");
if (forgotPassword) {
    forgotPassword.addEventListener("click", async () => {
        // Create a more elegant modal instead of using prompt
        const email = prompt("Enter your email to reset password:");
        if (email) {
            try {
                forgotPassword.textContent = "Sending...";
                forgotPassword.disabled = true;
                
                await sendPasswordResetEmail(auth, email);
                alert("Password reset link sent to your email.");
            } catch (error) {
                showError("signin-error", error.message);
            } finally {
                forgotPassword.textContent = "Forgot Password?";
                forgotPassword.disabled = false;
            }
        }
    });
}