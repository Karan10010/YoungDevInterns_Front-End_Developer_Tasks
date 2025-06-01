document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const error = document.getElementById('error');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    error.textContent = "All fields are required!";
  } else if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address!";
  } else {
    error.textContent = "";
    alert("Form submitted successfully!");
    // You can reset the form or send data to server here
    document.getElementById('contactForm').reset();
  }
});
