let ansiCodeMap = new Map();
ansiCodeMap.set('\u001b\\[22m', '');
ansiCodeMap.set('\u001b\\[30m', '<span class="ForeBlack">');
ansiCodeMap.set('\u001b\\[31m', '<span class="ForeRed">');
ansiCodeMap.set('\u001b\\[32m', '<span class="ForeGreen">');
ansiCodeMap.set('\u001b\\[33m', '<span class="ForeYellow">');
ansiCodeMap.set('\u001b\\[34m', '<span class="ForeBlue">');
ansiCodeMap.set('\u001b\\[35m', '<span class="ForeMagenta">');
ansiCodeMap.set('\u001b\\[36m', '<span class="ForeCyan">');
ansiCodeMap.set('\u001b\\[37m', '<span class="ForeWhite">');
ansiCodeMap.set('\u001b\\[39m', '<span class="ForeReset">');
ansiCodeMap.set('\u001b\\[40m', '<span class="BackBlack">');
ansiCodeMap.set('\u001b\\[41m', '<span class="BackRed">');
ansiCodeMap.set('\u001b\\[42m', '<span class="BackGreen">');
ansiCodeMap.set('\u001b\\[43m', '<span class="BackYellow">');
ansiCodeMap.set('\u001b\\[44m', '<span class="BackBlue">');
ansiCodeMap.set('\u001b\\[45m', '<span class="BackMagenta">');
ansiCodeMap.set('\u001b\\[46m', '<span class="BackCyan">');
ansiCodeMap.set('\u001b\\[47m', '<span class="BackWhite">');
ansiCodeMap.set('\u001b\\[49m', '<span class="BackWhite">');
ansiCodeMap.set('\u001b\\[0m', '<span class="ResetAll">');

// The body of this function will be executed as a content script inside the
// current page
function replaceAnsiCodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let content = node.textContent;
        console.log(content);
        for (let [ansiCode, htmlTag] of ansiCodeMap) {
            const regex = new RegExp(ansiCode, 'g');
            content = content.replace(regex, htmlTag);
        }
        console.log(content);
        node.parentNode.innerHTML = content;
    } else {
        for (let i = 0; i < node.childNodes.length; i++) {
            replaceAnsiCodes(node.childNodes[i]);
        }
    }
}

replaceAnsiCodes(document.body);
