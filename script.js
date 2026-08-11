// ==========================================
// MOSES ABULU - CYBERSECURITY PORTFOLIO
// JavaScript Interactivity
// ==========================================


// ==========================================
// 1. AUTOMATICALLY UPDATE THE FOOTER YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// 2. SMOOTH SCROLLING FOR NAVIGATION LINKS
// ==========================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (targetId && targetId.startsWith("#")) {
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        event.preventDefault();

        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});


// ==========================================
// 3. PROJECT BUTTONS
// ==========================================

const projectButtons = document.querySelectorAll(".project-btn");

const projectMessages = [
  {
    title: "Security Monitoring Lab",
    message:
      "This project focuses on security monitoring, event analysis, and learning how SIEM tools can help identify suspicious activity."
  },
  {
    title: "Linux Security Lab",
    message:
      "This project covers Linux commands, users, permissions, processes, system administration, and basic security practices."
  },
  {
    title: "Network Security Lab",
    message:
      "This project focuses on networking fundamentals including IP addressing, DNS, DHCP, protocols, and network security concepts."
  },
  {
    title: "Personal Portfolio",
    message:
      "This website was built using HTML, CSS, and JavaScript to showcase my cybersecurity learning journey and projects."
  }
];

projectButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const project = projectMessages[index];

    if (project) {
      alert(
        project.title +
        "\n\n" +
        project.message +
        "\n\nMore project details will be added soon."
      );
    }
  });
});


// ==========================================
// 4. CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check that all fields contain information
    if (!name || !email || !message) {
      formMessage.textContent =
        "Please complete all fields before submitting.";

      formMessage.style.display = "block";

      return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      formMessage.textContent =
        "Please enter a valid email address.";

      formMessage.style.display = "block";

      return;
    }

    // Display success message
    formMessage.textContent =
      `Thank you, ${name}! Your message has been received.`;

    formMessage.style.display = "block";

    // Clear the form
    contactForm.reset();
  });
}


// ==========================================
// 5. BUTTON CLICK EFFECT
// ==========================================

const buttons = document.querySelectorAll(
  ".btn, .project-btn"
);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.add("button-clicked");

    setTimeout(() => {
      this.classList.remove("button-clicked");
    }, 200);
  });
});


// ==========================================
// 6. SIMPLE SCROLL REVEAL EFFECT
// ==========================================

const sections = document.querySelectorAll(".section");

const revealSections = () => {
  sections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;

    const screenPosition = window.innerHeight - 100;

    if (sectionPosition < screenPosition) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSections);

// Run once when the page loads
revealSections();


// ==========================================
// 7. WELCOME MESSAGE IN CONSOLE
// ==========================================

console.log("================================");
console.log("Moses Abulu Cybersecurity Portfolio");
console.log("JavaScript loaded successfully!");
console.log("================================");
