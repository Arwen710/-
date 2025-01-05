document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    const playButton = document.getElementById("play-music");
    const musicIcon = document.getElementById("music-icon");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const popupImage = document.getElementById("popup-image");

    // 音樂控制
    playButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            musicIcon.classList.replace("fa-play", "fa-pause");
        } else {
            audio.pause();
            musicIcon.classList.replace("fa-pause", "fa-play");
        }
    });

    // 圖片輪播
    let slideIndex = 0;
    const slides = document.querySelector(".slides");
    const slideCount = slides.children.length;

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000);

    // 成員大圖彈窗
    document.querySelectorAll(".view-member").forEach(button => {
        button.addEventListener("click", () => {
            const memberId = button.dataset.member;
            const memberImage = document.querySelector(`.member img[alt="成員 ${memberId}"]`).src;
            popupImage.src = memberImage;
            popup.style.display = "flex";
        });
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });
});
