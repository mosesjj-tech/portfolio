/* =========================================
   MOSES ABULU - PORTFOLIO JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     CURRENT YEAR
  ========================================= */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* =========================================
     CONTACT FORM
  ========================================= */

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();


      /* Check empty fields */

      if (!name || !email || !message) {

        formMessage.textContent =
          "Please complete all fields before sending.";

        formMessage.className = "form-error";

        return;
      }


      /* Check email */

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {

        formMessage.textContent =
          "Please enter a valid email address.";

        formMessage.className = "form-error";

        return;
      }


      /* Show success message */

      formMessage.textContent =
        `Thank you, ${name}! Your message has been prepared successfully.`;

      formMessage.className = "form-success";


      /* Clear form */

      contactForm.reset();

    });

  }


  /* =========================================
     SMOOTH NAVIGATION
  ========================================= */

  const navigationLinks =
    document.querySelectorAll('.nav-links a[href^="#"]');

  navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  /* =========================================
     BACK TO TOP BUTTON
  ========================================= */

  const backToTop =
    document.getElementById("backToTop");

  if (backToTop) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 400) {

        backToTop.classList.add("show");

      } else {

        backToTop.classList.remove("show");

      }

    });


    backToTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* =========================================
     PROJECT LINK EFFECT
  ========================================= */

  const projectLinks =
    document.querySelectorAll(".project-link");

  projectLinks.forEach((link) => {

    link.addEventListener("click", () => {

      link.style.opacity = "0.7";

      setTimeout(() => {

        link.style.opacity = "1";

      }, 300);

    });

  });

});
