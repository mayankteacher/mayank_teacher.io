// Load shared header and footer
window.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

// Feedback Form Handling
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      document.getElementById("responseMsg").innerHTML = `<p>Thank you, ${name}, for your feedback!</p>`;
      form.reset();
    });
  }
});
