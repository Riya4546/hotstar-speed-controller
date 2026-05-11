function setSpeed(speed) {

    chrome.tabs.query(
        { active: true, currentWindow: true },

        function(tabs) {

            chrome.tabs.sendMessage(
                tabs[0].id,
                { speed: speed }
            );

        }
    );
}

document.getElementById("speed1")
    .addEventListener("click", () => setSpeed(1));

document.getElementById("speed125")
    .addEventListener("click", () => setSpeed(1.25));

document.getElementById("speed15")
    .addEventListener("click", () => setSpeed(1.5));

document.getElementById("speed2")
    .addEventListener("click", () => setSpeed(2));