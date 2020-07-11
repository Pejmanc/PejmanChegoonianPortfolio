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
let mediaSm = window.matchMedia("screen and (max-width: 500px)");

if (bioBtn) {
  bioBtn.addEventListener("click", toggleBio);
}

function toggleBio() {
  if (!showBio) {
    bioBtn.classList.add("close");
    bioText.classList.add("show");
    showBio = true;
    eduBtn.classList.remove("close");
    eduItems.classList.remove("show");
    showEdu = false;
    expBtn.classList.remove("close");
    expItems.classList.remove("show");
    showExp = false;
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

if (eduBtn) {
  eduBtn.addEventListener("click", toggleEdu);
}

function toggleEdu() {
  if (!showEdu) {
    eduBtn.classList.add("close");
    eduItems.classList.add("show");
    showEdu = true;
    bioBtn.classList.remove("close");
    bioText.classList.remove("show");
    showBio = false;
    expBtn.classList.remove("close");
    expItems.classList.remove("show");
    showExp = false;
  } else {
    eduBtn.classList.remove("close");
    eduItems.classList.remove("show");
    showEdu = false;
  }
}

// Exp Btn Setting
const expBtn = document.querySelector(".exp-btn");
const expItems = document.querySelector(".exp-items");
let showExp = false;

if (expBtn) {
  expBtn.addEventListener("click", toggleExp);
}

function toggleExp() {
  if (!showExp) {
    expBtn.classList.add("close");
    expItems.classList.add("show");
    showExp = true;
    bioBtn.classList.remove("close");
    bioText.classList.remove("show");
    showBio = false;
    eduBtn.classList.remove("close");
    eduItems.classList.remove("show");
    showEdu = false;
  } else {
    expBtn.classList.remove("close");
    expItems.classList.remove("show");
    showExp = false;
  }
}

//Contact Btn Settings
const contactBtn = document.querySelector(".contact-btn");
const contactText = document.querySelector(".contact-text");
let showContact = false;
// let mediaSm = window.matchMedia("screen and (max-width: 500px)");

if (contactBtn) {
  contactBtn.addEventListener("click", toggleContact);
}

function toggleContact() {
  if (!showContact) {
    contactBtn.classList.add("close");
    contactText.classList.add("show");
    showContact = true;
  } else {
    contactBtn.classList.remove("close");
    contactText.classList.remove("show");
    showContact = false;
  }
}
