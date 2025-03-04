// === Smooth Scrolling for Internal Links ===
for (const anchor of document.querySelectorAll('a[href^="#"]')) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

// === Sticky Navbar on Scroll ===
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// === Tab Switcher for Experience/Education ===
const tabs = document.querySelectorAll("[data-tab]");
const tabContents = document.querySelectorAll("[data-tab-content]");

for (const tab of tabs) {
    tab.addEventListener("click", () => {
        const targetTab = tab.getAttribute("data-tab");

        for (const t of tabs) t.classList.remove("active-tab");
        for (const tc of tabContents) tc.classList.add("hidden");

        tab.classList.add("active-tab");
        document.querySelector(`[data-tab-content="${targetTab}"]`).classList.remove("hidden");
    });
}

// === Mobile Nav Toggle (for hamburger menu) ===
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navToggle.classList.toggle("open");
});

// === Scroll-triggered Animation ===
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    }
}, { threshold: 0.2 });

for (const section of sections) observer.observe(section);
