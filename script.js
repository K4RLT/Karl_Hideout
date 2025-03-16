document.addEventListener("DOMContentLoaded", function () {
    let firstVisit = sessionStorage.getItem("firstVisit");

    if (!firstVisit) {
        // Show preloader
        document.getElementById("preloader").style.display = "flex";
        document.getElementById("content").classList.add("hidden");

        setTimeout(() => {
            // Hide preloader and show content
            document.getElementById("preloader").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
            sessionStorage.setItem("firstVisit", "true");
        }, 1000); // Adjust time as needed
    } else {
        // Hide preloader and show content immediately
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }

    // Burger menu toggle
    function toggleMenu() {
        var menu = document.querySelector(".menu");
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }

    document.querySelector(".menu-icon").addEventListener("click", toggleMenu);
});