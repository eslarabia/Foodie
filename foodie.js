// # Strict Mode
"use strict";

const addEventOneElement = function (element , type , listener) {
    if (element.length > 1) {
        for (let i = 0; i < element.length; i++) {
            element[i].addEventListener(type , listener);
        }
    } else {
        element.addEventListener(type , listener);
    }
}


const navbar = document.querySelector(".container-link");
let navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

addEventOneElement(navToggler , "click" , toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOneElement(navbarLinks , "click" , closeNav);


const header = document.querySelector("[data-navbar]");
const head = document.querySelector(".logo");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");

const links = document.querySelectorAll(".navbar-link")[0];
const link = document.querySelectorAll(".navbar-link")[1];
const linkOne = document.querySelectorAll(".navbar-link")[2];
const linkTwo = document.querySelectorAll(".navbar-link")[3];
const linkThree = document.querySelectorAll(".navbar-link")[4];

window.addEventListener("scroll" , function () {
    if (this.window.scrollY > 50) {
        header.classList.add("active");
        head.classList.add("active");
        menu.classList.add("active");
        close.classList.add("active");
        links.classList.add("active");
        link.classList.add("active");
        linkOne.classList.add("active");
        linkTwo.classList.add("active");
        linkThree.classList.add("active");
    } else {
        header.classList.remove("active");
        head.classList.remove("active");
        menu.classList.remove("active");
        close.classList.remove("active");
        links.classList.remove("active");
        link.classList.remove("active");
        linkOne.classList.remove("active");
        linkTwo.classList.remove("active");
        linkThree.classList.remove("active");
    }
});

const carousel = document.querySelector(".carousel");
const testy = document.querySelector(".testi-list");

let isDragging = false , startX , startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    testy.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = e.pageX;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    testy.scrollLeft = e.pageX;
    testy.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
    testy.classList.remove("dragging");
}

carousel.addEventListener("mousemove" , dragging);
carousel.addEventListener("mousedown" , dragStart);
testy.addEventListener("mousemove" , dragging);
testy.addEventListener("mousedown" , dragStart);
document.addEventListener("mouseup" , dragStop);



const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll" , function () {
    if (this.window.scrollY > 50) {
        backTopBtn.classList.add("active");
    } else {
        backTopBtn.classList.remove("active");
    }
});
