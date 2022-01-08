
// chrome.browserAction.onClicked.addListener(getid);

let queryOpt = { active: true, currentWindow: true };

chrome.extension.onConnect.addListener((port) => {
  port.onMessage.addListener((msg) => {
    chrome.tabs.query(queryOpt, logtab);
    function logtab(tab) {
      chrome.tabs.sendMessage(tab[0].id, msg);
    }
  })
})

