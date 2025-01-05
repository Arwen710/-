// 如果有需要更動的動態效果或擴展，這裡可以進行調整。
// 以下是針對專輯圖片點擊時增加動畫效果的範例。
// 範例：點擊專輯圖片顯示更詳細的專輯信息

document.querySelectorAll('.album').forEach(item => {
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
