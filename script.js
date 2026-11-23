const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = navLinks.querySelectorAll("a");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", false);

    });

});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }

    });
});

const elements = document.querySelectorAll(".reveal");

elements.forEach(function (element) {
    observer.observe(element);
});