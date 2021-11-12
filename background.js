// background.js
chrome.browserAction.onClicked.addListener(function (tab) {
  // Okay, the actual action should go here
  // And look, we already have the required Tab object for free!
  alert("asd3333");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(tab.url);
  console.log(tabId);
});
