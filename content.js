let currentSpeed = 1;

function applySpeed() {

    const video = document.querySelector("video");

    if (video) {
        video.playbackRate = currentSpeed;
    }
}

setInterval(applySpeed, 1000);

chrome.runtime.onMessage.addListener((request) => {

    if (request.speed) {

        currentSpeed = request.speed;

        applySpeed();
    }
});