function img_dataset_origin() {
  var imgtag = $("#articlediv").find("img");
  var imgtt = $("#articlediv").find("img");
  var imgtaglen = imgtag.length;
  // console.log(imgtaglen);
  // console.log(imgtag.innerHTML);
  var imgttlen = imgtt.length;

  for (i = 0; i < imgtaglen; i++) {
    if (`${imgtag[i].src}`.includes("transparent.gif")) {
      //console.log(imgtag[i].dataset.dataOriginal);
      // var iti = imgtag[i].parentElement.innerHTML;
      // var iti1 = iti.split('data-original="');
      // var iti2 = iti1[1].split('" alt="');
      if (imgtag[i].dataset.original != null) {
        imgtag[i].src = imgtag[i].dataset.original;
      }
    }
    // console.log(imgtag[i].src);
  }
}

function img_idk() {
  var imgtag = $("#articlediv").find("img");
  for (i in imgtag) {
    for (z = 1; z <= 10; z++) {
      try {
        let vdw = document.getElementById(`#videojs${z}`);
        vdw.style.maxwidth = "820px";
      } catch (e) {}
    }
    // autoplay
    try {
      // document.querySelector("#videojs1")
      // var mutedvideo =
      //   document.getElementById("bvideojs_muted1").innerHTML;
      // var mutedvideo1 = mutedvideo.replace(">", "autoplay >");
      // document.getElementById("bvideojs_muted1").innerHTML = mutedvideo1;
      var imgtag1 = imgtag[i].querySelector("video");
      if (imgtag1.style.maxWidth !== "100%") {
        imgtag1.style.maxWidth = "820px";
      }
      if (imgtag1 != null) {
        var vd = imgtag1.parentElement.innerHTML;
        var vd1 = imgtag1.innerHTML;
        vd = vd.replace(">", "autoplay >");
        vd1 = vd1.replace(">", "autoplay >");
        imgtag1.parentElement.innerHTML = `${vd}`;
        imgtag1.innerHTML = vd1;
        //console.log("123123", imgtag1.parentElement.innerHTML);
        if (imgtag1.parentElement.style.maxWidth !== "100%") {
          imgtag1.parentElement.style.maxWidth = "820px";
        }

        document.querySelector(".vjs-sound.video-js").style.width = "auto";
      }
      imgtag1.parentElement.style.maxWidth = "820px";
    } catch (e) {}
    try {
      var aTag = document.getElementsByClassName("re_comment");
    } catch (e) {}
    var True_and_false = true;
    try {
      while (True_and_false) {
        document.querySelector(".fdb_nav.img_tx > a").remove();
        //console.log("지우기", i);
      }
    } catch (e) {
      True_and_false = false;
    }
  }
}
