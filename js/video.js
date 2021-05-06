let video = document.querySelector("video");

video.addEventListener("click", () => {
    video.classList.toggle('active');

    if(video.paused) {
        video.play();
    } else {
        video.pause();
        video.currentTime = 0;
    }
});