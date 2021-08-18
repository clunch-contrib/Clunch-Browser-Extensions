function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            cmd: "clunch",
            value: message
        }, function (response) {
            if (callback) callback(response);
        });
    });
}


sendMessageToContentScript("获取绘图对象的信息", function (response) {

console.log(response);

});
