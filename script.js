/* =========================================
   MOSES ABULU
   CYBERSECURITY PORTFOLIO JAVASCRIPT
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
     SMOOTH NAVIGATION
  ========================================= */

  const navigationLinks =
    document.querySelectorAll('.nav-links a[href^="#"]');

  navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      const targetElement =
        document.querySelector(targetId);

      if (targetElement) {

        event.preventDefault();

        targetElement.scrollIntoView({
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
     CONTACT FORM
  ========================================= */

  const contactForm =
    document.getElementById("contactForm");

  const formMessage =
    document.getElementById("formMessage");


  if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();


      const nameInput =
        document.getElementById("name");

      const emailInput =
        document.getElementById("email");

      const messageInput =
        document.getElementById("message");


      const name =
        nameInput.value.trim();

      const email =
        emailInput.value.trim();

      const message =
        messageInput.value.trim();


      /* Check fields */

      if (!name || !email || !message) {

        formMessage.textContent =
          "Please complete all fields before sending.";

        formMessage.className =
          "form-error";

        return;

      }


      /* Validate email */

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (!emailPattern.test(email)) {

        formMessage.textContent =
          "Please enter a valid email address.";

        formMessage.className =
          "form-error";

        return;

      }


      /* Success */

      formMessage.textContent =
        `Thank you, ${name}! Your message has been prepared successfully.`;

      formMessage.className =
        "form-success";


      /* Clear form */

      contactForm.reset();

    });

  }


  /* =========================================
     PROJECT CARD INTERACTION
  ========================================= */

  const projectCards =
    document.querySelectorAll(".project-card");


  projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

      card.style.transform =
        "translateY(-8px)";

    });


    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "translateY(0)";

    });

  });


  /* =========================================
     DASHBOARD CARD INTERACTION
  ========================================= */

  const dashboardCards =
    document.querySelectorAll(".dashboard-card");


  dashboardCards.forEach((card) => {

    card.addEventListener("click", () => {

      card.classList.toggle("dashboard-active");

    });

  });


  /* =========================================
     CONSOLE MESSAGE
  ========================================= */

  console.log(
    "Moses Abulu Cybersecurity Portfolio loaded successfully."
  );

  console.log(
    "Portfolio technologies: HTML, CSS, JavaScript."
  );

});
