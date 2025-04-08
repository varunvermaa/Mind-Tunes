document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCourse = urlParams.get("course");
    const selectedAmount = urlParams.get("amount");

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const courseField = document.getElementById("course");
    const amountField = document.getElementById("amount");
    const payAmountField = document.getElementById("payAmount");

    // Populate fields from URL params
    if (selectedCourse && selectedAmount) {
        courseField.value = decodeURIComponent(selectedCourse);
        amountField.value = selectedAmount;
        payAmountField.textContent = parseFloat(selectedAmount).toFixed(2);
    }

    // Input validation for name and phone
    document.getElementById('paymentForm').addEventListener('input', function () {
        nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, '');
        phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
    });

    // Form validation on submit
    document.getElementById('paymentForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const amount = parseFloat(amountField.value);
        if (!amount || amount <= 0 || isNaN(amount)) {
            document.getElementById('amountError').textContent = "Please enter a valid amount.";
        } else {
            document.getElementById('amountError').textContent = "";
            alert("Details Submitted Successfully!");
        }
    });
});

// Firebase configuration — replace with your actual config
const firebaseConfig = {
    apiKey: "AIzaSyBqzM8Jn476R6Np9gxkSSFuUN3-YHitKx4",
    authDomain: "mindtunes-c09c9.firebaseapp.com",
    projectId: "mindtunes-c09c9",
    storageBucket: "mindtunes-c09c9.firebasestorage.app",
    messagingSenderId: "711226726879",
    appId: "1:711226726879:web:23ab595820e81663660c6a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Form Submit Event
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const amount = document.getElementById('amount').value;
    const purpose = document.getElementById('purpose').value;

    // Add to Firestore in "payments" collection
    db.collection("payments").add({
        name: name,
        phone: phone,
        email: email,
        course: course,
        amount: amount,
        transactionId: purpose,
        createdAt: new Date()
    })
    .then(() => {
        alert("Payment details submitted successfully!");
        document.getElementById('paymentForm').reset();
    })
    .catch((error) => {
        alert("Error saving data: " + error.message);
    });
});


