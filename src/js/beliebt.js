"use strict"

window.addEventListener("load", function () {
    const preiseContainer = document.querySelector("#preise-container");
    const beliebteSlide = document.querySelector("#preise-card-beliebt")?.closest(".preise-slide");

    if (window.innerWidth <= 1000 && preiseContainer && beliebteSlide) {
        preiseContainer.scrollLeft = beliebteSlide.offsetLeft;
    }
});