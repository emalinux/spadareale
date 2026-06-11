document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".hamburger").forEach(function (hamburger) {
    const header = hamburger.closest(".header");
    const mobilePanel = header ? header.querySelector(".mobile-panel") : null;

    if (!mobilePanel) return;

    hamburger.addEventListener("click", function () {
      mobilePanel.classList.toggle("is-open");

      const isOpen = mobilePanel.classList.contains("is-open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href === "#" || href === "#top") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});