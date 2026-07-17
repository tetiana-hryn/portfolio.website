document.addEventListener("DOMContentLoaded", () => {
  // ===========================
  // MOBILE MENU
  // ===========================

  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      menuBtn.classList.toggle("open");
    });
  }

  // Close menu after clicking link

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");

      menuBtn.classList.remove("open");
    });
  });

  // ===========================
  // HEADER SCROLL
  // ===========================

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ===========================
  // ACTIVE NAV LINK
  // ===========================

  const sections = document.querySelectorAll("section");

  const links = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;

      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // ===========================
  // SCROLL ANIMATION
  // ===========================

  const hiddenElements = document.querySelectorAll(
    ".skill-card, .service-card, .project-card, .stat-card, .about-right",
  );

  hiddenElements.forEach((element) => {
    element.classList.add("hidden");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  hiddenElements.forEach((element) => {
    observer.observe(element);
  });

  // ===========================
  // CURRENT YEAR
  // ===========================

  const year = document.querySelector(".footer-bottom p");

  if (year) {
    year.innerHTML = `© ${new Date().getFullYear()} Tetiana Hryn. All Rights Reserved.`;
  }
});
