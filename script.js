document.addEventListener("DOMContentLoaded", function() {
    function toggleMenu() {
        var menu = document.querySelector(".menu");
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }

    document.querySelector(".menu-icon").addEventListener("click", toggleMenu);
});