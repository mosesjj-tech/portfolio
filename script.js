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

  const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
  );


  navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

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


  if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();


      const name =
        document.getElementById("name")?.value.trim();

      const email =
        document.getElementById("email")?.value.trim();

      const message =
        document.getElementById("message")?.value.trim();


      if (!name || !email || !message) {

        if (formMessage) {

          formMessage.textContent =
            "Please complete all fields.";

          formMessage.className =
            "form-error";

        }

        return;
      }


      if (formMessage) {

        formMessage.textContent =
          `Thanks, ${name}! Your message has been received.`;

        formMessage.className =
          "form-success";

      }


      contactForm.reset();

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
        item.classList.remove("dashboard-active");
      });


      card.classList.add("dashboard-active");

    });

  });


  /* =======================================================
     PROJECT BUTTON INTERACTION
  ======================================================= */

  const projectButtons =
    document.querySelectorAll(".project-btn");


  projectButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const projectCard =
        button.closest(".project-card");


      if (!projectCard) {
        return;
      }


      const projectTitle =
        projectCard.querySelector("h3");


      if (projectTitle) {

        alert(
          `${projectTitle.textContent} — Project details coming soon.`
        );

      }

    });

  });


  /* =======================================================
     INTERSECTION ANIMATION
  ======================================================= */

  const animatedElements =
    document.querySelectorAll(
      ".focus-card, .skill-card, .dashboard-card, .tool-card, .project-card"
    );


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
              "translateY(0)";

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.15
      }
    );


  animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(25px)";

    element.style.transition =
      "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

  });


  /* =======================================================
     CONSOLE MESSAGE
  ======================================================= */

  console.log(
    "🔐 Moses Abulu Cybersecurity Portfolio loaded successfully."
  );

  console.log(
    "🛡️ Keep learning. Keep building. Keep improving."
  );

});
