document.addEventListener("DOMContentLoaded", function () {
    let firstVisit = sessionStorage.getItem("firstVisit");

    const tips = [
        { category: "Tip", message: "Karl loves creating furry art. (づ￣ ³￣)づ" },
        { category: "Pro Tip", message: "Customize your workspace! ヽ(✿ﾟ▽ﾟ)ノ" },
        { category: "Did You Know?", message: "Karl’s favorite animal? TIGERR! (＾• ω •＾)" },
        { category: "Tip", message: "Slow and steady wins the race. (￣▽￣)ノ" },
        { category: "Pro Tip", message: "Try new tools and ideas! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" },
        { category: "Did You Know?", message: "Karl’s inspired by music. ♪(´▽｀)" },
        { category: "Tip", message: "Small steps, big wins. (•̀ᴗ•́)و ̑̑" },
        { category: "Pro Tip", message: "Practice makes progress. (๑•̀ㅂ•́)و✧" },
        { category: "Did You Know?", message: "Karl loves digital painting. (´｡• ᵕ •｡`)" },
        { category: "Tip", message: "Celebrate creativity! (ﾉ´ヮ`)ﾉ*: ･ﾟ" },
        { category: "Pro Tip", message: "Draw daily to improve. (๑˃ᴗ˂)ﻭ" },
        { category: "Did You Know?", message: "Karl’s favorite artist? Aurora. ♪(^∇^*)" },
        { category: "Tip", message: "Art reflects emotions. (｡♥‿♥｡)" },
        { category: "Pro Tip", message: "Mistakes are part of the process. (๑•́ ₃ •̀๑)" },
        { category: "Did You Know?", message: "Karl’s favorite season? Autumn. (˶ᵔ ᵕ ᵔ˶)" },
        { category: "Tip", message: "Art tells a story. (｡◕‿◕｡)" },
        { category: "Pro Tip", message: "Take breaks to refresh. (￣ω￣)" },
        { category: "Did You Know?", message: "Karl’s favorite quote? 'Art is what you make others see.' (✿◠‿◠)" },
        { category: "Tip", message: "Inspired by nature and music. (ﾉ´ヮ`)ﾉ*: ･ﾟ" },
        { category: "Pro Tip", message: "Use references—it’s not cheating! (๑•̀ㅂ•́)و✧" },
        { category: "Did You Know?", message: "Karl’s favorite colors? Blues and purples. (´｡• ᵕ •｡`)" },
        { category: "Tip", message: "Join Karl’s creative journey! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" },
        { category: "Pro Tip", message: "Keep a sketchbook. (๑˃ᴗ˂)ﻭ" },
        { category: "Did You Know?", message: "Karl’s favorite part? Sketching. (✿´‿`)" },
        { category: "Tip", message: "Blend traditional and digital art. (ﾉ´ヮ`)ﾉ*: ･ﾟ" },
        { category: "Pro Tip", message: "Share your art for feedback. (｡♥‿♥｡)" },
        { category: "Did You Know?", message: "Karl’s favorite subject? (＾• ω •＾)" },
        { category: "Tip", message: "Embrace your unique self. (✿◠‿◠)" },
        { category: "Pro Tip", message: "Set small goals to stay motivated. (•̀ᴗ•́)و ̑̑" },
        { category: "Did You Know?", message: "Karl’s art celebrates nature. (˶ᵔ ᵕ ᵔ˶)" },
        { category: "Tip", message: "Creativity meets technology. (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" },
        { category: "Pro Tip", message: "Don’t compare your art to others. (๑•́ ₃ •̀๑)" },
        { category: "Did You Know?", message: "Karl’s advice? Don’t fear mistakes. (๑•̀ㅂ•́)و✧" },
        { category: "Tip", message: "Celebrate life through art. (ﾉ´ヮ`)ﾉ*: ･ﾟ" }
    ];

    if (!firstVisit) {
        document.getElementById("preloader").style.display = "flex";
        document.getElementById("content").classList.add("hidden");

        const tipText = document.querySelector(".tip-text");
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipText.setAttribute("data-category", randomTip.category);
        tipText.textContent = randomTip.message;

        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
            sessionStorage.setItem("firstVisit", "true");
        }, 5000);
    } else {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }

    // ✅ MENU TOGGLE FUNCTIONALITY (Fixed Version)
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    function toggleMenu() {
        menu.classList.toggle("active");
    }

    menuIcon.addEventListener("click", function (event) {
        toggleMenu();
        event.stopPropagation(); // Prevents click from propagating to the document
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // ✅ ART GALLERY LOGIC
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
    let currentIndex = 0;

    function changeArt() {
        currentIndex = (currentIndex + 1) % artImages.length;
        artImageElement.src = artImages[currentIndex];
    }

    setInterval(changeArt, 5000);

    artImageElement.addEventListener("click", function () {
        modal.style.display = "block";
        modalImage.src = artImages[currentIndex];
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

function changeArt() {
    if (artImages.length > 0) {
        currentIndex = (currentIndex + 1) % artImages.length;
        artImageElement.src = artImages[currentIndex];
    }
}

function disableScroll() {
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "";
}

artImageElement.addEventListener("click", function () {
    modal.style.display = "block";
    modalImage.src = artImages[currentIndex];
    disableScroll();
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    enableScroll();
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        enableScroll();
    }
});


// PREVENT IMAGE DOWNLOAD
document.addEventListener("contextmenu", function (event) {
    if (event.target.tagName === "IMG") {
        event.preventDefault();
        alert("Image downloading is disabled.");
    }
});

// PREVENT DEV TOOLS ACCESS
document.onkeydown = function (event) {
    if (
        event.keyCode === 123 || // F12
        (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.keyCode === 74) || // Ctrl+Shift+J
        (event.ctrlKey && event.keyCode === 85) // Ctrl+U
    ) {
        alert("Console access is disabled.");
        return false;
    }
};

