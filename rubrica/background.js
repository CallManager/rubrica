chrome.runtime.onInstalled.addListener(function() {
    console.log("Siamo dentro! pepeHands");
    chrome.tabs.create({ url: "options.html" });
  });

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
