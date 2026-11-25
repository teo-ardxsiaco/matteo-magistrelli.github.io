
// =================================
// NAVBAR
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const links = navLinks.querySelectorAll("a");

// HAMBURGER MENU

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        console.log("The menu is opened.");
    } else {
        console.log("The menu is closed.");
    }

});

// CLOSE MENU WHEN CLICKING A LINK

links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// CLOSE MENU WITH ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    }

});


// =================================
// SCROLL REVEAL
// =================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        } else {

            entry.target.classList.remove("visible");

        }

    });

});

const elements = document.querySelectorAll(".reveal");

elements.forEach((element) => {

    observer.observe(element);

});


// =================================
// SCROLL SPY
// =================================

const sections = document.querySelectorAll("main section");

const observer2 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            links.forEach((link) => {

                link.classList.remove("active");

            });

            const activeLink = document.querySelector(
                `nav a[href="#${entry.target.id}"]`
            );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}, {

    rootMargin: "-30% 0px -60% 0px",
    threshold: 0

});

sections.forEach((section) => {

    observer2.observe(section);

});


// =================================
// NAVBAR AUTO HIDE
// =================================

let scrollTimer;

const navbar = document.querySelector("header nav");

window.addEventListener("scroll", () => {

    if (navLinks.classList.contains("active")) {
        return;
    }

    navbar.classList.add("nav-hidden");

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {

        navbar.classList.remove("nav-hidden");

    }, 500);

});