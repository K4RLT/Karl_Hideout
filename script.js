document.addEventListener("DOMContentLoaded", function () {
    let firstVisit = sessionStorage.getItem("firstVisit");

    const tips = [
        { category: "Tip", message: "Karl loves creating furry art. (づ￣ ³￣)づ" },
        { category: "Pro Tip", message: "Customize your workspace! ヽ(✿ﾟ▽ﾟ)ノ" },
        { category: "Did You Know?", message: "Karl’s favorite animal? The fox. (＾• ω •＾)" },
        { category: "Tip", message: "Slow and steady wins the race. (￣▽￣)ノ" },
        { category: "Pro Tip", message: "Try new tools and ideas! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" },
        { category: "Did You Know?", message: "Karl’s inspired by music. ♪(´▽｀)" },
        { category: "Tip", message: "Small steps, big wins. (•̀ᴗ•́)و ̑̑" },
        { category: "Pro Tip", message: "Practice makes progress. (๑•̀ㅂ•́)و✧" },
        { category: "Did You Know?", message: "Karl loves digital painting. (´｡• ᵕ •｡`)" },
        { category: "Tip", message: "Celebrate creativity! (ﾉ´ヮ`)ﾉ*: ･ﾟ" },
        { category: "Pro Tip", message: "Draw daily to improve. (๑˃ᴗ˂)ﻭ" },
        { category: "Did You Know?", message: "Karl’s favorite music? Lo-fi beats. ♪(^∇^*)" },
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
        { category: "Did You Know?", message: "Karl’s favorite subject? Mythical creatures. (＾• ω •＾)" },
        { category: "Tip", message: "Embrace your unique self. (✿◠‿◠)" },
        { category: "Pro Tip", message: "Set small goals to stay motivated. (•̀ᴗ•́)و ̑̑" },
        { category: "Did You Know?", message: "Karl’s art celebrates nature. (˶ᵔ ᵕ ᵔ˶)" },
        { category: "Tip", message: "Creativity meets technology. (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" },
        { category: "Pro Tip", message: "Don’t compare your art to others. (๑•́ ₃ •̀๑)" },
        { category: "Did You Know?", message: "Karl’s advice? Don’t fear mistakes. (๑•̀ㅂ•́)و✧" },
        { category: "Tip", message: "Celebrate life through art. (ﾉ´ヮ`)ﾉ*: ･ﾟ" }
    ];

    if (!firstVisit) {
        // Show preloader
        document.getElementById("preloader").style.display = "flex";
        document.getElementById("content").classList.add("hidden");

        // Display a random tip
        const tipText = document.querySelector(".tip-text");
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipText.setAttribute("data-category", randomTip.category);
        tipText.textContent = randomTip.message;

        setTimeout(() => {
            // Hide preloader and show content
            document.getElementById("preloader").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
            sessionStorage.setItem("firstVisit", "true");
        }, 5000); // Adjust time as needed
    } else {
        // Hide preloader and show content immediately
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }

    // Burger menu toggle
    function toggleMenu() {
        var menu = document.querySelector(".menu");
        menu.classList.toggle("active");
    }

    document.querySelector(".menu-icon").addEventListener("click", toggleMenu);
    document.querySelector(".menu-icon").addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            toggleMenu();
        }
    });
});