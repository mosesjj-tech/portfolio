// ==========================================
// MOSES ABULU
// CYBERSECURITY PORTFOLIO
// JAVASCRIPT
// ==========================================


// ==========================================
// 1. FOOTER YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// 2. SMOOTH NAVIGATION
// ==========================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (!targetId || !targetId.startsWith("#")) {
      return;
    }

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });
});


// ==========================================
// 3. CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();


    // Check empty fields

    if (!name || !email || !message) {

      formMessage.textContent =
        "Please complete all fields before submitting.";

      formMessage.style.display = "block";

      return;
    }


    // Check email format

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

      formMessage.textContent =
        "Please enter a valid email address.";

      formMessage.style.display = "block";

      return;
    }


    // Successful submission

    formMessage.textContent =
      `Thank you, ${name}! Your message has been received.`;

    formMessage.style.display = "block";


    // Clear form

    contactForm.reset();

  });

}


// ==========================================
// 4. BUTTON ANIMATION
// ==========================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("click", function () {

    this.classList.add("button-clicked");

    setTimeout(() => {

      this.classList.remove("button-clicked");

    }, 200);

  });

});


// ==========================================
// 5. SECTION SCROLL REVEAL
// ==========================================

const sections = document.querySelectorAll(".section");

function revealSections() {

  sections.forEach((section) => {

    const sectionPosition =
      section.getBoundingClientRect().top;

    const screenPosition =
      window.innerHeight - 100;

    if (sectionPosition < screenPosition) {

      section.classList.add("visible");

    }

  });

}

window.addEventListener("scroll", revealSections);


// Run when page loads

revealSections();


// ==========================================
// 6. CONSOLE MESSAGE
// ==========================================

console.log(
  "Moses Abulu Cybersecurity Portfolio loaded successfully."
);

console.log(
  "HTML + CSS + JavaScript are connected."
);
