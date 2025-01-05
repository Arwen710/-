
// 示例：如果需要為時間軸項目添加動態效果，這裡是 JavaScript 的基礎結構。
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    const playButton = document.getElementById("play-music");
    const musicIcon = document.getElementById("music-icon");

    // 檢查瀏覽器是否支持 localStorage
    const isPlaying = localStorage.getItem("isMusicPlaying") === "true";

    // 根據 localStorage 恢復播放狀態
    if (isPlaying) {
        audio.play();
        musicIcon.classList.remove("fa-play");
        musicIcon.classList.add("fa-pause");
    }

    // 播放按鈕點擊事件
    playButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            musicIcon.classList.remove("fa-play");
            musicIcon.classList.add("fa-pause");
            localStorage.setItem("isMusicPlaying", "true");
        } else {
            audio.pause();
            musicIcon.classList.remove("fa-pause");
            musicIcon.classList.add("fa-play");
            localStorage.setItem("isMusicPlaying", "false");
        }
    });
});

