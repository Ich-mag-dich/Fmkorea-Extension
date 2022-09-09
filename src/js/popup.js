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

// let volume1 = document.getElementById("volume-slider");
// volume1.addEventListener("change", function (e) {
//   var val = e.currentTarget.value;
//   document.getElementById("test22").innerText = val;
//   localStorage.getItem("fmvolume-volume") = val / 100;
//   let user_video_volume = {
//     user_video_volume_value: val / 100,
//     user_video_volume_bool: true,
//   };
//   chrome.storage.local.set(user_video_volume, function () {
//     //콜백
//   });

//   chrome.storage.local.get(user_video_volume, function (res) {
//     console.log(res.user_video_volume_value);
//     console.log(res.user_video_volume_bool);
//   });
// });
