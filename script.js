"use strict";

const yearElement = document.getElementById("currentYear");
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
const navigationLinks = document.querySelectorAll(".navigation a");
const pageSections = document.querySelectorAll("section[id]");

yearElement.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(menuIsOpen)
  );
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

function updateActiveNavigationLink() {
  let activeSection = "home";

  pageSections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {
      activeSection = section.id;
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${activeSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavigationLink);
updateActiveNavigationLink();
