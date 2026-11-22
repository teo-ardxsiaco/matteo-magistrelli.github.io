const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    console.log("Hai cliccato il menu!");
    navLinks.classList.toggle("active");
});