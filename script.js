// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio JavaScript is working!");

  // -----------------------------------------
  // Current year in footer
  // -----------------------------------------

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // -----------------------------------------
  // Contact form
  // -----------------------------------------

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all the fields.";

        return;
      }

      if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email address.";

        return;
      }

      formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

      contactForm.reset();

      console.log("Form submitted by:", name);
    });
  }

  // -----------------------------------------
  // Project buttons
  // -----------------------------------------

  const projectButtons = document.querySelectorAll(".project-btn");

  projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("This project page is coming soon!");
    });
  });
});

