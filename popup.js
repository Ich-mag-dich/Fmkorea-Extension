document.addEventListener("click", function (e) {
  if (e.target.id == "addrbtn") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      var activeTabId = activeTab.id;
      var activeTabUrl = activeTab.url;
      if (activeTabUrl.includes("www.fmkorea.com") === true) {
        chrome.cookies.set({
          url: "https://www.fmkorea.com",
          name: "readed_documents",
          value: "0",
        });
        document.querySelector("#addr").innerText = "쿠키 삭제 완료";
      } else {
        document.querySelector("#addr").innerText =
          "현재 보고있는 페이지는 에펨코리아가 아닙니다.";
      }
    });
  }
});
