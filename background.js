chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "customSelection",
        title: "Search Wikipedia for '%s'",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info,tab) => {
    if(info.menuItemId === "customSelection"){
        const selected = info.selectionText;
        const query = encodeURIComponent(selected);
        const url = 'https://en.wikipedia.org/wiki/' + query;
        chrome.tabs.create({url:url});
    }
});