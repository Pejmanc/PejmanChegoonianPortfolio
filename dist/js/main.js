const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}

//Bio Btn Settings
const bioBtn = document.querySelector(".bio-btn");
const bioText = document.querySelector(".bio-text");
let showBio = false;

bioBtn.addEventListener("click", toggleBio);

function toggleBio() {
  if (!showBio) {
    bioBtn.classList.add("close");
    bioText.classList.add("show");
    showBio = true;
    eduBtn.classList.remove("close");
    eduItems.classList.remove("show");
    showEdu = false;
  } else {
    bioBtn.classList.remove("close");
    bioText.classList.remove("show");
    showBio = false;
  }
}

// Edu Btn Setting
const eduBtn = document.querySelector(".edu-btn");
const eduItems = document.querySelector(".edu-items");
let showEdu = false;

eduBtn.addEventListener("click", toggleEdu);

function toggleEdu() {
  if (!showEdu) {
    eduBtn.classList.add("close");
    eduItems.classList.add("show");
    showEdu = true;
    bioBtn.classList.remove("close");
    bioText.classList.remove("show");
    showBio = false;
  } else {
    eduBtn.classList.remove("close");
    eduItems.classList.remove("show");
    showEdu = false;
  }
}
