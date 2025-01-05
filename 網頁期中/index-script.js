document.addEventListener("DOMContentLoaded", () => {
    const playMusicButton = document.getElementById("play-music");
    const musicIcon = document.getElementById("music-icon");
    const backgroundMusic = document.getElementById("background-music");

    // 初始化音樂播放狀態
    let isPlaying = localStorage.getItem("isMusicPlaying") === "true";

    // 恢復狀態
    if (isPlaying) {
        backgroundMusic.play().catch(() => {
            console.warn("音樂播放被阻止，需要用戶互動！");
            isPlaying = false;
            localStorage.setItem("isMusicPlaying", "false");
        });
        musicIcon.classList.replace("fa-play", "fa-pause");
    }

    // 播放按鈕點擊事件
    playMusicButton.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play().then(() => {
                musicIcon.classList.replace("fa-play", "fa-pause");
                localStorage.setItem("isMusicPlaying", "true");
            }).catch((error) => {
                console.error("音樂播放失敗：", error);
                alert("請點擊頁面任意位置後重試播放音樂！");
            });
        } else {
            backgroundMusic.pause();
            musicIcon.classList.replace("fa-pause", "fa-play");
            localStorage.setItem("isMusicPlaying", "false");
        }
    });

    // 生成雪花
    function generateSnowflakes() {
        const container = document.getElementById("snowflakes-container");
        for (let i = 0; i < 100; i++) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s`;
            snowflake.innerHTML = "&#10052;";
            container.appendChild(snowflake);
        }
    }

    // 生成愛心
    function generateHearts() {
        const container = document.getElementById("hearts-container");
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "&#10084;";
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
            heart.style.animationDelay = `${Math.random() * 3}s`;
            container.appendChild(heart);
        }
    }

    generateSnowflakes();
    generateHearts();
});
