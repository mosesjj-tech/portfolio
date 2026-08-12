/* =========================================================
   MOSES ABULU
   CYBERSECURITY PORTFOLIO
   FULL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* =======================================================
     BACK TO TOP BUTTON
  ======================================================= */

  const backToTop = document.getElementById("backToTop");

  if (backToTop) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 500) {
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


  /* =======================================================
     SMOOTH NAVIGATION
  ======================================================= */

  const navigationLinks =
    document.querySelectorAll('a[href^="#"]');


  navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");


      if (!targetId || targetId === "#") {
        return;
      }


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


  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const contactForm =
    document.getElementById("contactForm");

  const formMessage =
    document.getElementById("formMessage");


  /*
     IMPORTANT:
     Replace this email address with the email address
     where you want to receive portfolio messages.
  */

  const portfolioEmail =
    "YOUR-EMAIL@example.com";


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
        nameInput ? nameInput.value.trim() : "";

      const email =
        emailInput ? emailInput.value.trim() : "";

      const message =
        messageInput ? messageInput.value.trim() : "";


      /* ---------------------------------------------------
         CHECK REQUIRED FIELDS
      --------------------------------------------------- */

      if (!name || !email || !message) {

        if (formMessage) {

          formMessage.textContent =
            "Please complete all fields.";

          formMessage.className =
            "form-error";

        }

        return;
      }


      /* ---------------------------------------------------
         CHECK EMAIL FORMAT
      --------------------------------------------------- */

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (!emailPattern.test(email)) {

        if (formMessage) {

          formMessage.textContent =
            "Please enter a valid email address.";

          formMessage.className =
            "form-error";

        }

        return;
      }


      /* ---------------------------------------------------
         PREPARE EMAIL
      --------------------------------------------------- */

      const subject =
        encodeURIComponent(
          `Portfolio Message from ${name}`
        );


      const body =
        encodeURIComponent(
          `Hello Moses,\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n\n` +
          `Message:\n${message}\n\n` +
          `Sent from the Moses Abulu Cybersecurity Portfolio.`
        );


      /*
         This opens the visitor's email application
         with the message already prepared.
      */

      const mailtoLink =
        `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;


      window.location.href =
        mailtoLink;


      /* ---------------------------------------------------
         WEBSITE MESSAGE
      --------------------------------------------------- */

      if (formMessage) {

        formMessage.textContent =
          "Your email application is opening. Thank you for contacting me!";

        formMessage.className =
          "form-success";

      }


      /* ---------------------------------------------------
         CLEAR FORM
      --------------------------------------------------- */

      setTimeout(() => {

        contactForm.reset();

      }, 500);

    });

  }


  /* =======================================================
     DASHBOARD CARD INTERACTION
  ======================================================= */

  const dashboardCards =
    document.querySelectorAll(".dashboard-card");


  dashboardCards.forEach((card) => {

    card.addEventListener("click", () => {

      dashboardCards.forEach((item) => {

        item.classList.remove(
          "dashboard-active"
        );

      });


      card.classList.add(
        "dashboard-active"
      );

    });

  });


  /* =======================================================
     PROJECT CARD INTERACTION
  ======================================================= */

  const projectCards =
    document.querySelectorAll(".project-card");


  projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

      card.setAttribute(
        "data-hover",
        "true"
      );

    });


    card.addEventListener("mouseleave", () => {

      card.removeAttribute(
        "data-hover"
      );

    });

  });


  /* =======================================================
     SCROLL ANIMATION
  ======================================================= */

  const animatedElements =
    document.querySelectorAll(
      ".focus-card, " +
      ".skill-card, " +
      ".dashboard-card, " +
      ".tool-card, " +
      ".project-card"
    );


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.style.opacity =
                "1";

              entry.target.style.transform =
                "translateY(0)";

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.15
        }
      );


    animatedElements.forEach((element) => {

      element.style.opacity =
        "0";

      element.style.transform =
        "translateY(25px)";

      element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

      observer.observe(element);

    });

  }


  /* =======================================================
     SECURITY CONSOLE MESSAGE
  ======================================================= */

  console.log(
    "🔐 Moses Abulu Cybersecurity Portfolio loaded successfully."
  );

  console.log(
    "🛡️ Keep learning. Keep building. Keep improving."
  );

});
