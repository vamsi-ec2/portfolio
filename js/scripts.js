// Navbar shadow on scroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        nav.classList.add("shadow");
    } else {
        nav.classList.remove("shadow");
    }
});

// Smooth scroll (for future anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Page loading animation (optional)
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});