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
      const targetElement = document.querySelector(targetId);

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
     BACK TO TOP
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


      /* CHECK REQUIRED FIELDS */

      if (!name || !email || !message) {

        formMessage.textContent =
          "Please complete all fields before sending.";

        formMessage.className =
          "form-error";

        return;
      }


      /* CHECK EMAIL */

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {

        formMessage.textContent =
          "Please enter a valid email address.";

        formMessage.className =
          "form-error";

        return;
      }


      /* =========================================
         CREATE EMAIL MESSAGE
      ========================================= */

      const recipient =
        "mosesabulu@example.com";

      const subject =
        encodeURIComponent(
          `Portfolio Contact from ${name}`
        );

      const body =
        encodeURIComponent(
          `Hello Moses,

Name: ${name}
Email: ${email}

Message:
${message}

Sent from the Moses Abulu Cybersecurity Portfolio.`
        );


      /* =========================================
         OPEN EMAIL APPLICATION
      ========================================= */

      window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;


      /* =========================================
         SUCCESS MESSAGE
      ========================================= */

      formMessage.textContent =
        "Your email application should now open.";

      formMessage.className =
        "form-success";

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
