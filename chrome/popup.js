let changeColor = document.getElementById("changeColor");

// When the button is clicked, inject replaceAnsiCodes into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }, );

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["/replace.js"]
    });

    //chrome.scripting.executeScript({
    //    target: { tabId: tab.id },
    //    files: ["/injectStyle.js"]
    //});

    chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ["/ansi.css"]
    });
});
