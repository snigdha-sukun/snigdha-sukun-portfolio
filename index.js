const menuHamburger = document.getElementById('menu_hamburger');
const closeMenu = document.getElementById('close_menu');
const nav_menu = document.getElementById('nav_menu');

menuHamburger.addEventListener("click", () => {
    nav_menu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    nav_menu.style.display = "none";
});