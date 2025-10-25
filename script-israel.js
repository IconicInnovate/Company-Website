window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".content");

    // Fade out effect
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    // Wait for fade animation to finish, then show content
    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 800); // Matches CSS transition duration
});
window.addEventListener('load', function () {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});

// // Core values
// document.addEventListener("DOMContentLoaded", () => {
//     const valuesGrid = document.querySelector(".values-grid");
//     const prevButton = document.querySelector(".nav-button.prev");
//     const nextButton = document.querySelector(".nav-button.next");
//     const valueCards = document.querySelectorAll(".value-card");

//     // Function to scroll to the next or previous card group
//     const scrollCards = (direction) => {
//         if (!valuesGrid || valueCards.length === 0) return;

//         const isMobile = window.matchMedia("(max-width: 768px)").matches;
//         let scrollAmount;

//         if (isMobile) {
//             // Scroll one card at a time on mobile
//             scrollAmount = valueCards[0].offsetWidth + 15; // 15px is the gap
//         } else {
//             // Scroll four cards at a time on desktop
//             scrollAmount = (valueCards[0].offsetWidth + 20) * 4; // 20px is the gap
//         }

//         const currentScroll = valuesGrid.scrollLeft;

//         if (direction === "next") {
//             valuesGrid.scroll({
//                 left: currentScroll + scrollAmount,
//                 behavior: "smooth",
//             });
//         } else if (direction === "prev") {
//             valuesGrid.scroll({
//                 left: currentScroll - scrollAmount,
//                 behavior: "smooth",
//             });
//         }
//     };

//     // Event listeners for navigation buttons
//     if (prevButton && nextButton) {
//         prevButton.addEventListener("click", () => scrollCards("prev"));
//         nextButton.addEventListener("click", () => scrollCards("next"));
//     }
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const valuesGrid = document.querySelector(".values-grid");
//     const prevButton = document.querySelector(".nav-button.prev");
//     const nextButton = document.querySelector(".nav-button.next");
//     const scrollAmount = 250;

//     if (valuesGrid && prevButton && nextButton) {
//         nextButton.addEventListener("click", () => {
//             valuesGrid.scrollBy({
//                 left: scrollAmount,
//                 behavior: "smooth",
//             });
//         });

//         prevButton.addEventListener("click", () => {
//             valuesGrid.scrollBy({
//                 left: -scrollAmount,
//                 behavior: "smooth",
//             });
//         });
//     }
// });
