document.addEventListener("DOMContentLoaded", function () {
    let firstVisit = sessionStorage.getItem("firstVisit");

    const tips = [
        { category: "Tip", message: "Karl loves creating furry art. (づ￣ ³￣)づ" },
        { category: "Pro Tip", message: "Customize your workspace! ヽ(✿ﾟ▽ﾟ)ノ" },
        { category: "Did You Know?", message: "Karl’s favorite animal? TIGERR! (＾• ω •＾)" },
        { category: "Tip", message: "Slow and steady wins the race. (￣▽￣)ノ" },
        { category: "Pro Tip", message: "Try new tools and ideas! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" }
    ];

    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    const tipText = document.querySelector(".tip-text");

    if (preloader && content && tipText) {
        if (!firstVisit) {
            preloader.style.display = "flex";
            content.classList.add("hidden");

            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            tipText.setAttribute("data-category", randomTip.category);
            tipText.textContent = randomTip.message;

            setTimeout(() => {
                preloader.style.display = "none";
                content.classList.remove("hidden");
                sessionStorage.setItem("firstVisit", "true");
            }, 5000);
        } else {
            preloader.style.display = "none";
            content.classList.remove("hidden");
        }
    }

    // ✅ MENU TOGGLE FUNCTIONALITY
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    if (menuIcon && menu) {
        function toggleMenu() {
            menu.classList.toggle("active");
        }

        menuIcon.addEventListener("click", function (event) {
            toggleMenu();

            menuIcon.classList.add("spin");
            setTimeout(() => menuIcon.classList.remove("spin"), 400);
            event.stopPropagation();
        });

        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
                menu.classList.remove("active");
            }
        });

        menu.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    // ✅ ART GALLERY LOGIC (WITH PREV/NEXT BUTTONS)
    const artImages = [
        "Images/Art/Art-1.png",
        "Images/Art/Art-2.png",
        "Images/Art/Art-3.png",
        "Images/Art/Art-4.png"
    ];

    const artImageElement = document.getElementById("art-image");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeButton = document.querySelector(".close");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;

    function changeArt(next = true) {
        if (artImageElement) {
            if (next) {
                currentIndex = (currentIndex + 1) % artImages.length;
            } else {
                currentIndex = (currentIndex - 1 + artImages.length) % artImages.length;
            }
            artImageElement.src = artImages[currentIndex];
        }
    }

    if (artImageElement) {
        setInterval(() => changeArt(true), 5000);

        artImageElement.addEventListener("click", function () {
            if (modal && modalImage) {
                modal.style.display = "block";
                modalImage.src = artImages[currentIndex];
                disableScroll();
            }
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            if (modal) {
                modal.style.display = "none";
                enableScroll();
            }
        });
    }

    if (modal) {
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                enableScroll();
            }
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            changeArt(false);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            changeArt(true);
        });
    }

    // ✅ TOGGLE CONTENT FUNCTION
    function toggleContent() {
        let content1 = document.getElementById("content1");
        let content2 = document.getElementById("content2");
        let bookmark = document.querySelector(".bookmark");

        if (content1 && content2 && bookmark) {
            content1.classList.toggle("hidden");
            content2.classList.toggle("hidden");

            bookmark.classList.add("clicked");
            setTimeout(() => bookmark.classList.remove("clicked"), 500);
        }
    }

    // ✅ DISABLE RIGHT CLICK ON IMAGES
    document.addEventListener("contextmenu", function (event) {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
            alert("MEOW >:3");
        }
    });

    // ✅ PREVENT DEV TOOLS ACCESS
    document.onkeydown = function (event) {
        if (
            event.keyCode === 123 || 
            (event.ctrlKey && event.shiftKey && event.keyCode === 73) ||
            (event.ctrlKey && event.shiftKey && event.keyCode === 74) ||
            (event.ctrlKey && event.keyCode === 85)
        ) {
            alert("MEOW>:3");
            return false;
        }
    };

    // ✅ SCROLL LOCK FUNCTIONS
    function disableScroll() {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden"; 
    }

    function enableScroll() {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = ""; 
    }
});
