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