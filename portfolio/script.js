const themeBtn = document.getElementById("themeBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeBtn.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
